<script lang="ts">
  import LinkButton from '../LinkButton.svelte'
  import Text from '../Text.svelte'
  import Button from '../Button.svelte'
  import Input from '../Input.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n.js'

  interface Props {
    supabaseClient: SupabaseClient
    view: 'sign_in' | 'sign_up'
    setView: (view: 'sign_in' | 'sign_up' | 'magic_link' | 'forgotten_password') => void
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { supabaseClient, view, setView, getText }: Props = $props()

  let error = $state('')
  let message = $state('')
  let loading = $state(false)
  let email = $state('')
  let password = $state('')

  async function submit() {
    error = ''
    message = ''
    loading = true

    if (view == 'sign_up') {
      const { error: signUpError } = await supabaseClient.auth.signUp({
        email, password
      })

      if (signUpError) error = signUpError.message
    } else if (view == 'sign_in') {
      const { error: signInError } = await supabaseClient.auth.signInWithPassword({
        email, password
      })

      if (signInError) error = signInError.message
    }

    loading = false
  }
</script>

<form onsubmit={(e) => { e.preventDefault(); submit(); }}>
  <Input
    name="email"
    type="email"
    label={getText('emailLabel')}
    placeholder={getText('emailPlaceholder')}
    icon="mail"
    bind:value={email}
  />
  <Input
    name="password"
    type="password"
    label={getText('passwordLabel')}
    placeholder={getText('passwordPlaceholder')}
    icon="key"
    bind:value={password}
  />

  {#if view == 'sign_up'}
    <Button block primary size="large" {loading} icon="inbox">
      {getText('signUpButton')}
    </Button>
    <div class="links">
      <LinkButton onclick={() => setView('magic_link')}>
        {getText('switchToMagicLink')}
      </LinkButton>
      <LinkButton onclick={() => setView('sign_in')}>
        {getText('switchToSignIn')}
      </LinkButton>
    </div>
  {:else}
    <Button block primary size="large" {loading} icon="inbox">
      {getText('signInButton')}
    </Button>
    <div class="links">
      <LinkButton onclick={() => setView('sign_up')}>
        {getText('switchToSignUp')}
      </LinkButton>
    </div>
  {/if}

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
