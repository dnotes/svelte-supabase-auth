<script lang="ts">
  import type { SupabaseClient } from '@supabase/supabase-js'
  import InputWrapper from '$lib/elements/InputWrapper.svelte'
  import type { AuthTexts } from '$lib/i18n';
  import Button from '$lib/elements/Button.svelte';
  import { messages } from '$lib/messages.svelte';
  import PasswordField from '$lib/components/PasswordField.svelte';
  import LinkButton from '$lib/elements/LinkButton.svelte';

  interface Props {
    processing?: boolean
    supabaseClient: SupabaseClient
    InputWrapper: typeof InputWrapper,
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let {
    processing = $bindable(false),
    InputWrapper:Wrapper,
    supabaseClient,
    getText,
  }:Props = $props()

  let issues:Promise<string[]> = $state(new Promise(()=>{}))
  let validatePassphrase = $state(()=>{})
  let loading = $state(false)
  let nonce = $state('')
  let passphrase = $state('')

  async function handleSubmit() {
    messages.clear()
    loading = true
    try {
      await validatePassphrase()
      let arr = await issues
      if (arr.length) {
        loading = false
        return
      }
      const { data, error } = await supabaseClient.auth.updateUser({
        nonce,
        password: passphrase
      })
      if (error) throw error
      messages.add('success', getText('pwChanged'))
      processing = false
    } catch (error) {
      messages.add('error', error instanceof Error ? error.message : 'Failed to change password')
    }
    loading = false
  }

</script>



<form onsubmit={handleSubmit}>
  <p>{getText('enterVerificationCode')}</p>
  <Wrapper name="nonce" label={getText('enterCode')} icon="key">
    <input
      type="text"
      name="nonce"
      bind:value={nonce}
      required
      inputmode="numeric"
      title="Enter exactly 6 digits"
    />
  </Wrapper>
  <Wrapper name="password" label={getText('pwLabel')} icon="key">
    <PasswordField feedback bind:issues bind:validatePassphrase bind:value={passphrase} {getText} />
  </Wrapper>
  <Button submit block primary size="large" icon="inbox" {loading}>
    {getText('pwChange')}
  </Button>
  <LinkButton onclick={() => processing = false}>
    {getText('cancelButton')}
  </LinkButton>
</form>
