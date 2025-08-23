<script lang="ts">
  import LinkButton from './LinkButton.svelte'
  import Text from './Text.svelte'
  import Button from './Button.svelte'
  import Input from './Input.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'

  interface Props {
    supabaseClient: SupabaseClient
    setView: (view: 'sign_in' | 'sign_up' | 'magic_link' | 'forgotten_password') => void
  }

  let { supabaseClient, setView }: Props = $props()

  let error = $state('')
  let message = $state('')
  let loading = $state(false)
  let email = $state('')

  async function submit() {
    error = ''
    message = ''
    loading = true

    const { error: err } = await supabaseClient.auth.resetPasswordForEmail(email)

    if (err)
      error = err.message
    else
      message = 'Check your email for the password reset link'

    loading = false
  }
</script>

<form onsubmit={(e) => { e.preventDefault(); submit(); }}>
  <Input name="email" type="email" label="Email address" placeholder="Your email address" icon="mail" bind:value={email}/>
  <Button block primary size="large" {loading} icon="inbox">Send reset password instructions</Button>

  <LinkButton onclick={() => setView('sign_in')}>Go back to sign in</LinkButton>

  {#if message}
    <Text>{message}</Text>
  {/if}

  {#if error}
    <Text type="danger">{error}</Text>
  {/if}
</form>
