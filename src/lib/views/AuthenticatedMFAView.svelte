<script lang="ts">
  import Button from '../elements/Button.svelte'
  import Text from '../elements/Text.svelte'
  import InputWrapper from '../elements/InputWrapper.svelte'
  import LinkButton from '../elements/LinkButton.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
    onComplete?: () => void
  }

  let { InputWrapper: Wrapper, supabaseClient, getText, onComplete }: Props = $props()

  let loading = $state(false)
  let error = $state('')
  let message = $state('')
  let factors = $state<any[]>([])
  let showEnrollment = $state(false)

  // Enrollment state
  let qrCode = $state('')
  let secret = $state('')
  let verificationCode = $state('')
  let factorId = $state('')
  let challengeId = $state('')

  // Load existing factors
  async function loadFactors() {
    try {
      const { data, error: factorsError } = await supabaseClient.auth.mfa.listFactors()
      if (factorsError) throw factorsError

      factors = [...(data.totp || []), ...(data.phone || [])]
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to load MFA factors'
    }
  }

  // Initialize component
  $effect(() => {
    loadFactors()
  })

  async function startEnrollment() {
    loading = true
    error = ''

    try {
      const { data, error: enrollError } = await supabaseClient.auth.mfa.enroll({
        factorType: 'totp'
      })

      if (enrollError) throw enrollError

      factorId = data.id
      qrCode = data.totp.qr_code
      secret = data.totp.secret
      showEnrollment = true
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to start enrollment'
    } finally {
      loading = false
    }
  }

  async function verifyEnrollment() {
    if (!verificationCode.trim()) return

    loading = true
    error = ''

    try {
      // First create a challenge
      const { data: challengeData, error: challengeError } = await supabaseClient.auth.mfa.challenge({
        factorId
      })

      if (challengeError) throw challengeError
      challengeId = challengeData.id

      // Then verify the code
      const { error: verifyError } = await supabaseClient.auth.mfa.verify({
        factorId,
        challengeId,
        code: verificationCode.trim()
      })

      if (verifyError) throw verifyError

      message = 'MFA enrollment successful!'
      showEnrollment = false
      verificationCode = ''
      await loadFactors()

      // Call completion callback if provided
      if (onComplete) {
        setTimeout(onComplete, 1500)
      }
    } catch (err) {
      error = err instanceof Error ? err.message : 'Invalid verification code'
    } finally {
      loading = false
    }
  }

  async function unenrollFactor(factor: any) {
    if (!confirm(getText('confirmUnenroll'))) return

    loading = true
    error = ''

    try {
      const { error: unenrollError } = await supabaseClient.auth.mfa.unenroll({
        factorId: factor.id
      })

      if (unenrollError) throw unenrollError

      message = 'Factor removed successfully'
      await loadFactors()
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to remove factor'
    } finally {
      loading = false
    }
  }

  function cancelEnrollment() {
    showEnrollment = false
    verificationCode = ''
    error = ''
    message = ''
  }
</script>

<div>
  <h2>{getText('mfaEnrollment')}</h2>

  {#if !showEnrollment}
    <!-- Factor Management View -->
    <div>
      <h3>{getText('mfaFactors')}</h3>

      {#if factors.length === 0}
        <Text>{getText('noFactorsEnrolled')}</Text>
      {:else}
        <table>
          <thead>
            <tr>
              <th>{getText('factorName')}</th>
              <th>{getText('factorType')}</th>
              <th>{getText('factorStatus')}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {#each factors as factor}
              <tr>
                <td>{factor.friendly_name || `${factor.factor_type.toUpperCase()} Factor`}</td>
                <td>{factor.factor_type.toUpperCase()}</td>
                <td>{factor.status}</td>
                <td>
                  {#if factor.status === 'verified'}
                    <LinkButton onclick={() => unenrollFactor(factor)}>
                      {getText('unenrollFactor')}
                    </LinkButton>
                  {/if}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}

      <Button
        block
        primary
        size="large"
        {loading}
        onclick={startEnrollment}
      >
        {getText('enrollNewFactor')}
      </Button>
    </div>
  {:else}
    <!-- TOTP Enrollment View -->
    <div>
      <h3>{getText('totpSetup')}</h3>
      <p>{getText('totpSetupDescription')}</p>

      <div>
        <p>{getText('scanQRCode')}</p>
        {#if qrCode}
          <img src={qrCode} alt="QR Code for TOTP setup" />
        {/if}

        <Text>{getText('enterSecret', { secret })}</Text>
      </div>

      <form onsubmit={(e) => { e.preventDefault(); verifyEnrollment(); }}>
        <Wrapper name="verification-code" label={getText('totpCode')} icon="key">
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

        <Button primary size="large" {loading} onclick={verifyEnrollment}>
          {getText('verifySetup')}
        </Button>

        <LinkButton onclick={cancelEnrollment}>
          Cancel
        </LinkButton>
      </form>
    </div>
  {/if}

  {#if message}
    <Text>{message}</Text>
  {/if}

  {#if error}
    <Text type="danger">{error}</Text>
  {/if}
</div>


