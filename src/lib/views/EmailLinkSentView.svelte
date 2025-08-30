<script lang="ts">
  import LinkButton from '../elements/LinkButton.svelte'
  import Button from '../elements/Button.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import InputWrapper from '$lib/elements/InputWrapper.svelte';
  import { messages } from '$lib/messages.svelte';
  import { emailLinkSent, saOptions } from '$lib/stores.svelte';

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { InputWrapper:Wrapper, supabaseClient, getText }: Props = $props()

  let loading = $state(false)
  let resendLoading = $state(false)
  let verificationCode = $state('')

  async function verifyOTP() {
    if (!$emailLinkSent) return

    if (!verificationCode.trim()) {
      messages.add('error', 'Please enter the verification code')
      return
    }

    messages.clear()
    loading = true

    try {
      const { error } = await supabaseClient.auth.verifyOtp({
        email: $emailLinkSent.email,
        token: verificationCode,
        type: 'email'
      })

      if (error) {
        messages.add('error', error.message)
      } else {
        messages.add('success', 'Email verified successfully!')
        // The auth state change will be handled by the parent component
      }
    } catch (err) {
      messages.add('error', getText('authenticationError', { error: err instanceof Error ? err.message : 'Unknown error' }))
    }

    $emailLinkSent = null
    loading = false
  }

  async function resendEmail() {
    if (!$emailLinkSent || !$saOptions.auth.email) return

    messages.clear()
    resendLoading = true

    try {
      const { error } = await supabaseClient.auth.signInWithOtp({ email: $emailLinkSent.email })

      if (error) {
        messages.add('error', error.message)
      } else {
        $emailLinkSent = {
          ...$emailLinkSent,
          sentAt: new Date(),
          expiresAt: new Date(Date.now() + $saOptions.auth.email.otp_expiry! * 1000)
        }
        messages.add('success', getText('emailLinkSent', { email: $emailLinkSent.email }))
      }
    } catch (err) {
      messages.add('error', getText('networkError', { error: err instanceof Error ? err.message : 'Unknown error' }))
    }

    resendLoading = false
  }
</script>

<div>
  <form onsubmit={(e) => { e.preventDefault(); verifyOTP(); }}>
    <Wrapper name="verification-code" label={getText('linkEnterCodeLabel', { email:$emailLinkSent?.email })} icon="key">
      <input
        type="text"
        name="verification-code"
        bind:value={verificationCode}
        placeholder="000000"
        maxlength="6"
        autocomplete="one-time-code"
        inputmode="numeric"
        aria-label={getText('enterCode')}
        onpaste={(e) => {
          // Handle pasted OTP codes
          const paste = e.clipboardData?.getData('text')
          if (paste && /^\d{6}$/.test(paste)) {
            verificationCode = paste
            e.preventDefault()
          }
        }}
      >
    </Wrapper>

    <Button submit block primary size="large" {loading} icon="check">
      {getText('verifyCode')}
    </Button>

    <Button
      block
      size="large"
      loading={resendLoading || loading}
      icon="mail"
      onclick={resendEmail}
    >
      {getText('resendEmail')}
    </Button>

    <LinkButton onclick={() => $emailLinkSent = null}>
      {getText('cancelButton')}
    </LinkButton>
  </form>
</div>
