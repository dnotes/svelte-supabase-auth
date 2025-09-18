<script lang="ts">
  import type { SupabaseClient } from '@supabase/supabase-js'
  import InputWrapper from '$lib/elements/InputWrapper.svelte'
  import type { AuthTexts } from '$lib/i18n';
  import Button from '$lib/elements/Button.svelte';
  import { messages } from '$lib/messages.svelte';
  import PasswordField from '$lib/components/PasswordField.svelte';
  import CodeField from '$lib/components/CodeField.svelte';
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

  let validate = $state(()=>{})
  let loading = $state(false)
  let nonce = $state('')
  let passphrase = $state('')
  let isGood = $state(false)

  async function handleSubmit() {
    messages.clear()
    loading = true
    try {
      await validate()
      if (!isGood) {
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
    } catch (error:any) {
      messages.add('error', getText('error', { error: error?.message ?? '?' }))
    }
    loading = false
  }

</script>



<form onsubmit={e => { e.preventDefault(); handleSubmit() }}>
  <p>{getText('enterVerificationCode')}</p>
  <Wrapper name="verification-code" label={getText('enterCode')} icon="key">
    <CodeField bind:value={nonce} {getText} />
  </Wrapper>
  <Wrapper name="password" label={getText('pwLabel')} icon="key">
    <PasswordField feedback bind:isGood bind:value={passphrase} bind:validate {getText} />
  </Wrapper>
  <Button submit block primary size="large" icon="inbox" {loading}>
    {getText('pwChange')}
  </Button>
  <LinkButton onclick={() => processing = false}>
    {getText('cancelButton')}
  </LinkButton>
</form>
