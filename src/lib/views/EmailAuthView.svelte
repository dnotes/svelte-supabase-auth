<script lang="ts">
  import LinkButton from '../elements/LinkButton.svelte'
  import Text from '../elements/Text.svelte'
  import Button from '../elements/Button.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import type { SupabaseAuthOptions } from '../options'
  import InputWrapper from '$lib/elements/InputWrapper.svelte';

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    setView: (view: 'sign_in' | 'forgotten_password') => void
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
    authOptions: SupabaseAuthOptions
  }

  let { InputWrapper:Wrapper, supabaseClient, setView, getText, authOptions }: Props = $props()

  let error = $state('')
  let message = $state('')
  let loading = $state(false)
  let email = $state('')
  let password = $state('')
  let usePassword = $state(false) // Default to magic link flow

  // Computed properties for auth options
  const canSignUp = $derived(authOptions.auth.enable_signup && authOptions.auth.email?.enable_signup)

  async function submitMagicLink() {
    error = ''
    message = ''
    loading = true

    const { error: err } = await supabaseClient.auth.signInWithOtp({ email })

    if (err)
      error = err.message
    else
      message = getText('magicLinkSent')

    loading = false
  }

  async function submitPassword(isSignUp: boolean = false) {
    error = ''
    message = ''
    loading = true

    if (isSignUp) {
      const { error: signUpError } = await supabaseClient.auth.signUp({
        email, password
      })

      if (signUpError) error = signUpError.message
    } else {
      const { error: signInError } = await supabaseClient.auth.signInWithPassword({
        email, password
      })

      if (signInError) error = signInError.message
    }

    loading = false
  }
</script>

<form>
  <Wrapper name="email" label={getText('emailLabel')} icon="mail">
    <input type="email" name="email" bind:value={email}>
  </Wrapper>

  {#if usePassword}
    <Wrapper name="password" label={getText('passwordLabel')} icon="key">
      <input type="password" name="password" bind:value={password}>
    </Wrapper>
  {/if}

  {#if !usePassword}
    <!-- Magic Link Flow -->
    <Button block primary size="large" {loading} icon="inbox" onclick={submitMagicLink}>
      {getText('sendLink')}
    </Button>
  {:else}
    <!-- Password Flow -->
    <Button block primary size="large" {loading} icon="inbox" onclick={() => submitPassword(false)}>
      {getText('signIn')}
    </Button>

    {#if canSignUp}
      <Button block size="large" {loading} icon="inbox" onclick={() => submitPassword(true)}>
        {getText('signUp')}
      </Button>
    {/if}
  {/if}

  <div class="links">
    {#if !usePassword}
      <LinkButton onclick={() => usePassword = true}>
        {getText('switchToPassword')}
      </LinkButton>
    {:else}
      <LinkButton onclick={() => usePassword = false}>
        {getText('switchToMagicLink')}
      </LinkButton>

      <LinkButton onclick={() => setView('forgotten_password')}>
        {getText('resetPassword')}
      </LinkButton>
    {/if}
  </div>

  {#if message}
    <Text>{message}</Text>
  {/if}

  {#if error}
    <Text type="danger">{error}</Text>
  {/if}
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
  }

  .links {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    gap: 0.5rem;
  }
</style>
