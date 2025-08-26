<script lang="ts">
  import LinkButton from '../elements/LinkButton.svelte'
  import Text from '../elements/Text.svelte'
  import Button from '../elements/Button.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import InputWrapper from '$lib/elements/InputWrapper.svelte';

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    setView: (view: 'sign_in' | 'sign_in_with_password' | 'forgotten_password') => void
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { InputWrapper:Wrapper, supabaseClient, setView, getText }: Props = $props()

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
      message = getText('resetPasswordSent')

    loading = false
  }
</script>

<form onsubmit={(e) => { e.preventDefault(); submit(); }}>
  <Wrapper name="email" label={getText('emailLabel')} icon="mail">
    <input type="email" name="email" bind:value={email}>
  </Wrapper>
  <Button block primary size="large" {loading} icon="inbox">
    {getText('resetPassword')}
  </Button>

  <LinkButton onclick={() => setView('sign_in')}>
    {getText('goBackToSignIn')}
  </LinkButton>

  {#if message}
    <Text>{message}</Text>
  {/if}

  {#if error}
    <Text type="danger">{error}</Text>
  {/if}
</form>
