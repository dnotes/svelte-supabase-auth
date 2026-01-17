<script lang="ts">
  import LinkButton from '../elements/LinkButton.svelte'
  import Button from '../elements/Button.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import InputWrapper from '$lib/elements/InputWrapper.svelte';
  import CodeField from '../components/CodeField.svelte';
  import { messages } from '$lib/messages.svelte';
  import { emailLinkSent, getRedirect, saOptions } from '$lib/stores.svelte';

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
      messages.add('error', getText('enterVerificationCode'))
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
        messages.add('success', getText('emailVerifiedSuccess'))
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
      const { error } = await supabaseClient.auth.signInWithOtp({ 
        email: $emailLinkSent.email, 
        options: {
          emailRedirectTo: getRedirect()
        }
      })

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
      <CodeField bind:value={verificationCode} {getText} />
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
