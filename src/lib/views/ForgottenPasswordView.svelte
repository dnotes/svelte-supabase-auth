<script lang="ts">
  import LinkButton from '../elements/LinkButton.svelte'
  import Button from '../elements/Button.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import InputWrapper from '$lib/elements/InputWrapper.svelte';
  import type { AuthViews } from '$lib/Auth.svelte';
  import { messages } from '$lib/messages.svelte';

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    setView: (view: AuthViews) => void
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { InputWrapper:Wrapper, supabaseClient, setView, getText }: Props = $props()

  let loading = $state(false)
  let email = $state('')

  async function submit() {
    messages.clear()
    loading = true

    const { error: err } = await supabaseClient.auth.resetPasswordForEmail(email)

    if (err)
      messages.add('error', err.message)
    else
      messages.add('success', getText('resetPasswordSent'))

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
</form>
