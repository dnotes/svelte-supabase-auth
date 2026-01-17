<script lang="ts">
  import LinkButton from '../elements/LinkButton.svelte'
  import Button from '../elements/Button.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import InputWrapper from '$lib/elements/InputWrapper.svelte';
  import { messages } from '$lib/messages.svelte';
  import { signInView, email, getRedirect } from '$lib/stores.svelte';
  import { autofocus } from '$lib/utils/autofocus.svelte';

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { InputWrapper:Wrapper, supabaseClient, getText }: Props = $props()

  let loading = $state(false)

  async function submit() {
    messages.clear()
    loading = true

    const { error: err } = await supabaseClient.auth.resetPasswordForEmail($email, {
      redirectTo: getRedirect()
    })

    if (err)
      messages.add('error', err.message)
    else
      messages.add('success', getText('resetPasswordSent'))

    loading = false
  }
</script>

<form onsubmit={(e) => { e.preventDefault(); submit(); }}>
  <Wrapper name="email" label={getText('emailLabel')} icon="mail">
    <input type="email" name="email" bind:value={$email} use:autofocus>
  </Wrapper>
  <Button block primary submit size="large" {loading} icon="inbox">
    {getText('resetPassword')}
  </Button>

  <LinkButton onclick={() => $signInView = 'sign_in_with_password'}>
    {getText('goBackToSignIn')}
  </LinkButton>
</form>
