<script lang="ts">
  import Button from '../elements/Button.svelte'
  import Text from '../elements/Text.svelte'
  import InputWrapper from '../elements/InputWrapper.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { InputWrapper: Wrapper, supabaseClient, getText }: Props = $props()

    let loading = $state(false)
  let error = $state('')
  let verificationCode = $state('')
  let selectedFactor = $state<any>(null)
  let challenge = $state<any>(null)

  // Load factors as a Promise
  let factorsPromise = $state<Promise<any[]>>(loadFactors())

  async function loadFactors(): Promise<any[]> {
    const { data, error: factorsError } = await supabaseClient.auth.mfa.listFactors()
    if (factorsError) throw factorsError
    if (!data) throw new Error('No factors data returned')

    const verifiedFactors = [...(data.totp || []), ...(data.phone || [])].filter(
      factor => factor.status === 'verified'
    )

    if (verifiedFactors.length > 0) {
      selectedFactor = verifiedFactors[0]
      await initializeChallenge()
    }

    return verifiedFactors
  }

  async function initializeChallenge() {
    if (!selectedFactor) return

    try {
      const { data, error: challengeError } = await supabaseClient.auth.mfa.challenge({
        factorId: selectedFactor.id
      })
      if (challengeError) throw challengeError
      challenge = data
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to initialize challenge'
    }
  }

  async function verifyCode() {
    if (!challenge || !verificationCode.trim()) return

    loading = true
    error = ''

    try {
      const { error: verifyError } = await supabaseClient.auth.mfa.verify({
        factorId: selectedFactor.id,
        challengeId: challenge.id,
        code: verificationCode.trim()
      })

      if (verifyError) throw verifyError

      // Success - MFA verification complete, Auth.svelte will handle the state change
    } catch (err) {
      error = err instanceof Error ? err.message : 'Invalid verification code'
    } finally {
      loading = false
    }
  }

  async function handleFactorChange(factorId: string, factors: any[]) {
    const factor = factors.find(f => f.id === factorId)
    if (factor) {
      selectedFactor = factor
      await initializeChallenge()
    }
  }
</script>

<div>
  {#await factorsPromise}
    <p>Loading authentication methods...</p>
  {:then factors}
    {#if factors.length > 1}
      <div>
        <label for="factor-select">Authentication method:</label>
        <select id="factor-select" value={selectedFactor?.id} onchange={(e) => handleFactorChange((e.target as HTMLSelectElement).value, factors)}>
          {#each factors as factor}
            <option value={factor.id}>
              {factor.friendly_name || `${factor.factor_type.toUpperCase()}`}
            </option>
          {/each}
        </select>
      </div>
    {/if}

    <form onsubmit={(e) => { e.preventDefault(); verifyCode(); }}>
      <Wrapper name="verification-code" label={getText('mfaEnterCodeLabel')} icon="key">
        <input
          type="text"
          name="verification-code"
          bind:value={verificationCode}
          placeholder="000000"
          maxlength="6"
          pattern="[0-9]{6}"
          autocomplete="one-time-code"
          disabled={loading}
        >
      </Wrapper>

      <Button submit block primary size="large" {loading} onclick={verifyCode}>
        {getText('mfaVerifyCodeButton')}
      </Button>

      {#if error}
        <Text type="danger">{error}</Text>
      {/if}
    </form>
  {:catch err}
    <Text type="danger">{err.message || 'Failed to load MFA factors'}</Text>
  {/await}
</div>


