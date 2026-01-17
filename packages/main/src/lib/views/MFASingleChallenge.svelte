<script lang="ts">
  import Button from '../elements/Button.svelte'
  import InputWrapper from '../elements/InputWrapper.svelte'
  import CodeField from '../components/CodeField.svelte'
  import type { AuthMFAChallengeResponse, Factor, SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import { onDestroy } from 'svelte'
  import { messages } from '../messages.svelte'

  interface Props {
    cancellable?: boolean
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    factor: Factor
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
    factorId?: string // For enrollment, use this instead of factor.id
    processing?: boolean|string|number
  }

  let {
    cancellable = false,
    InputWrapper: Wrapper,
    supabaseClient,
    factor,
    getText,
    factorId,
    processing = $bindable(false),
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
    } catch (err:any) {
      messages.add('error', getText('mfaChallengeNotInitialized'))
    }
  }

  async function verifyCode(isRetry = false) {
    if (!challenge) {
      messages.add('error', getText('mfaChallengeNotInitialized'))
      return
    }

    loading = true
    messages.clear()

    try {
      const id = factorId || factor?.id || ''
      const { data, error: verifyError } = await supabaseClient.auth.mfa.verify({
        factorId: id,
        challengeId: challenge.id,
        code: verificationCode.trim()
      })

      if (verifyError) throw verifyError

      processing = false

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
            messages.add('error', getText('authenticationError', { error: retryErr instanceof Error ? retryErr.message : '?' }))
          }
        } else if (err.message.includes('mfa_verification_failed')) {
          messages.add('error', getText('invalidCodeError'))
        } else {
          messages.add('error', getText('authenticationError', { error: err.message }))
        }
      } else {
        messages.add('error', getText('authenticationError', { error: '?' }))
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
    messages.clear()
  })

</script>

<form onsubmit={(e) => { e.preventDefault(); verifyCode(); }}>
  <Wrapper name="verification-code" label={getText('mfaEnterCodeLabel')} icon="key">
    <CodeField bind:value={verificationCode} {getText} />
  </Wrapper>

  <Button submit block primary size="large" {loading} onclick={verifyCode}>
    {getText('verifyCode')}
  </Button>

  <Button block size="large" onclick={()=>{ if (cancellable) processing = false; else supabaseClient.auth.signOut() }}>
    {getText('cancelButton')}
  </Button>

</form>
