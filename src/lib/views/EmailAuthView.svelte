<script lang="ts">
  import LinkButton from '../LinkButton.svelte'
  import Text from '../Text.svelte'
  import Button from '../Button.svelte'
  import Input from '../Input.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'

  interface Props {
    supabaseClient: SupabaseClient
    view: 'sign_in' | 'sign_up'
    setView: (view: 'sign_in' | 'sign_up' | 'magic_link' | 'forgotten_password') => void
  }

  let { supabaseClient, view, setView }: Props = $props()

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
  <Input name="email" type="email" label="Email address" icon="mail" bind:value={email}/>
  <Input name="password" type="password" label="Password" icon="key" bind:value={password}/>

  {#if view == 'sign_up'}
    <Button block primary size="large" {loading} icon="inbox">Sign up</Button>
    <div class="links">
      <LinkButton onclick={() => setView('magic_link')}>Sign in with magic link</LinkButton>
      <LinkButton onclick={() => setView('sign_in')}>Do you have an account? Sign in</LinkButton>
    </div>
  {:else}
    <Button block primary size="large" {loading} icon="inbox">Sign in</Button>
    <div class="links">
      <LinkButton onclick={() => setView('sign_up')}>Don't have an account? Sign up</LinkButton>
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
