<script lang="ts">
  import LinkButton from '../elements/LinkButton.svelte'
  import Button from '../elements/Button.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import InputWrapper from '$lib/elements/InputWrapper.svelte';
  import { messages } from '$lib/messages.svelte';
  import { emailLinkSent, saOptions, signInView } from '$lib/stores.svelte';

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { InputWrapper:Wrapper, supabaseClient, getText }: Props = $props()

  let loading = $state(false)
  let email = $state('')
  let password = $state('')

  // Computed properties for auth options
  const canSignUp = $derived($saOptions.auth.enable_signup && $saOptions.auth.email && $saOptions.auth.email.enable_signup)
  const usePassword = $derived($signInView === 'sign_in_with_password')

  async function submitMagicLink() {
    if (!$saOptions.auth.email) return
    messages.clear()
    loading = true

    const { error: err } = await supabaseClient.auth.signInWithOtp({ email })

    if (err)
      messages.add('error', err.message)
    else {
      $emailLinkSent = {
        email,
        sentAt: new Date(),
        expiresAt: new Date(Date.now() + $saOptions.auth.email.otp_expiry * 1000)
      }
    }

    loading = false
  }

  async function submitPassword(isSignUp: boolean = false) {
    messages.clear()
    loading = true

    if (isSignUp) {
      const { error: signUpError } = await supabaseClient.auth.signUp({
        email, password
      })

      if (signUpError) messages.add('error', signUpError.message)
    } else {
      const { error: signInError } = await supabaseClient.auth.signInWithPassword({
        email, password
      })

      if (signInError) messages.add('error', signInError.message)
    }

    loading = false
  }
</script>

{#snippet emailLinks()}
  {#if !usePassword}
    <LinkButton onclick={() => $signInView = 'sign_in_with_password'}>
      {getText('switchToPassword')}
    </LinkButton>
  {:else}
    <LinkButton onclick={() => $signInView = 'sign_in'}>
      {getText('switchToMagicLink')}
    </LinkButton>
  {/if}
{/snippet}

{#snippet resetPasswordLink()}
  <LinkButton onclick={() => $signInView = 'forgotten_password'}>
    {getText('resetPassword')}
  </LinkButton>
{/snippet}

<form onsubmit={(e) => {
  e.preventDefault()
  if (usePassword) {
    submitPassword(false)
  } else {
    submitMagicLink()
  }
}}>
  <Wrapper name="email" label={getText('emailLabel')} icon="mail" links={emailLinks}>
    <input type="email" name="email" bind:value={email}>
  </Wrapper>

  {#if usePassword}
    <Wrapper name="password" label={getText('passwordLabel')} icon="key" links={resetPasswordLink}>
      <input type="password" name="password" bind:value={password}>
    </Wrapper>
  {/if}

  {#if !usePassword}
    <!-- Magic Link Flow -->
    <Button submit block primary size="large" {loading} icon="inbox" onclick={submitMagicLink}>
      {getText('sendLink')}
    </Button>
  {:else}
    <!-- Password Flow -->
    <Button submit block primary size="large" {loading} icon="inbox" onclick={() => submitPassword(false)}>
      {getText('signIn')}
    </Button>

    {#if canSignUp}
      <Button block size="large" {loading} icon="inbox" onclick={() => submitPassword(true)}>
        {getText('signUp')}
      </Button>
    {/if}
  {/if}

</form>

