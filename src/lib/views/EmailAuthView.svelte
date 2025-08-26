<script lang="ts">
  import LinkButton from '../elements/LinkButton.svelte'
  import Text from '../elements/Text.svelte'
  import Button from '../elements/Button.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import type { SupabaseAuthOptions } from '../options'
  import InputWrapper from '$lib/elements/InputWrapper.svelte';
  import type { AuthViews } from '$lib/Auth.svelte';

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    setView: (view: AuthViews) => void
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
    authOptions: SupabaseAuthOptions
    view: 'sign_in' | 'sign_in_with_password'
  }

  let { InputWrapper:Wrapper, supabaseClient, setView, getText, authOptions, view }: Props = $props()

  let error = $state('')
  let message = $state('')
  let loading = $state(false)
  let email = $state('')
  let password = $state('')

  // Computed properties for auth options
  const canSignUp = $derived(authOptions.auth.enable_signup && authOptions.auth.email && authOptions.auth.email.enable_signup)
  const usePassword = $derived(view === 'sign_in_with_password')

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

{#snippet emailLinks()}
  {#if !usePassword}
    <LinkButton onclick={() => setView('sign_in_with_password')}>
      {getText('switchToPassword')}
    </LinkButton>
  {:else}
    <LinkButton onclick={() => setView('sign_in')}>
      {getText('switchToMagicLink')}
    </LinkButton>
  {/if}
{/snippet}

{#snippet resetPasswordLink()}
  <LinkButton onclick={() => setView('forgotten_password')}>
    {getText('resetPassword')}
  </LinkButton>
{/snippet}

<form onsubmit={(e) => {
  console.log('fwah!')
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

  {#if message}
    <Text>{message}</Text>
  {/if}

  {#if error}
    <Text type="danger">{error}</Text>
  {/if}
</form>

