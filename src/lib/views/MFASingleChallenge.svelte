<script lang="ts">
  import Button from '../elements/Button.svelte'
  import Text from '../elements/Text.svelte'
  import InputWrapper from '../elements/InputWrapper.svelte'
  import type { AuthMFAChallengeResponse, Factor, SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import { onDestroy } from 'svelte'
  import { messages } from '../messages.svelte'

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    factor: Factor
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
    factorId?: string // For enrollment, use this instead of factor.id
  }

  let {
    InputWrapper: Wrapper,
    supabaseClient,
    factor,
    getText,
    factorId
  }: Props = $props()

  let loading = $state(false)
  let verificationCode = $state('')
  let challenge = $state<AuthMFAChallengeResponse["data"]|null>(null)

  // Initialize challenge on mount
  $effect(() => {
    initializeChallenge()
  })

  async function initializeChallenge() {
    const id = factorId || factor?.id
    if (!id) return

    try {
      const { data, error: challengeError } = await supabaseClient.auth.mfa.challenge({
        factorId: id
      })
      if (challengeError) throw challengeError
      challenge = data
      messages.clear()
    } catch (err) {
      messages.add('error', err instanceof Error ? err.message : 'Failed to initialize challenge')
    }
  }

  async function verifyCode(isRetry = false) {
    if (!challenge) {
      messages.add('error', 'Challenge not initialized')
      return
    }

    loading = true
    messages.clear()

    try {
      const id = factorId || factor?.id || ''
      const { error: verifyError } = await supabaseClient.auth.mfa.verify({
        factorId: id,
        challengeId: challenge.id,
        code: verificationCode.trim()
      })

      if (verifyError) throw verifyError

      messages.add('success', 'MFA verification successful')

    } catch (err) {
      if (err instanceof Error) {
        // Handle specific error cases
        if (err.message.includes('mfa_challenge_expired') && !isRetry) {
          try {
            await initializeChallenge()
            if (challenge) {
              await verifyCode(true) // Mark as retry
              return
            }
          } catch (retryErr) {
            messages.add('error', 'Authentication failed. Please try again.')
          }
        } else if (err.message.includes('mfa_verification_failed')) {
          messages.add('error', 'Invalid code. Please check and try again.')
        } else {
          messages.add('error', 'Authentication failed. Please try again.')
        }
      } else {
        messages.add('error', 'Authentication failed. Please try again.')
      }
    } finally {
      loading = false
    }
  }

  // Cleanup on component destruction
  onDestroy(() => {
    // Clear sensitive state
    challenge = null
    verificationCode = ''
  })
</script>

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

  <Button block size="large" onclick={()=>{ supabaseClient.auth.signOut() }}>
    {getText('cancelButton')}
  </Button>

</form>
