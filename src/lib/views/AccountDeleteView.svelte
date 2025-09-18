<script lang="ts">
  import type { SupabaseClient } from '@supabase/supabase-js'
  import InputWrapper from '$lib/elements/InputWrapper.svelte'
  import type { AuthTexts } from '$lib/i18n';
  import Button from '$lib/elements/Button.svelte';
  import { messages } from '$lib/messages.svelte';
  import LinkButton from '$lib/elements/LinkButton.svelte';
  import { saOptions } from '$lib/stores.svelte';
  import { autofocus } from '$lib/utils/autofocus.svelte';
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

  let loading = $state(false)
  let nonce = $state('')

  async function handleSubmit(e:Event) {
    e.preventDefault()
    messages.clear()
    loading = true
    const fn = $saOptions.deleteAccountFunction
    if (!fn) throw new Error('deleteAccountFunction is not set') // This should never happen
    try {
      if (typeof fn === 'string') {
        const result = await supabaseClient.rpc(fn, { nonce })
        console.log(result)
        if (result.error) throw result.error
      }
      else {
        await fn()
      }
      alert(getText('accountDeleted'))
      await supabaseClient.auth.signOut()
      processing = false
    } catch (error:any) {
      if (error?.message?.includes('verification code')) {
        messages.add('error', getText('invalidCodeError'))
        await supabaseClient.auth.reauthenticate()
      }
      else {
        messages.add('error', error?.message ?? getText('error', { error: error?.message ?? '?' }))
      }
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
      use:autofocus
    />
  </Wrapper>
  <Button submit block danger size="large" {loading}>
    {getText('deleteAccount')}
  </Button>
  <LinkButton onclick={() => { supabaseClient.auth.reauthenticate() }}>
    {getText('resendEmail')}
  </LinkButton>
  <LinkButton onclick={() => processing = false}>
    {getText('cancelButton')}
  </LinkButton>
</form>
