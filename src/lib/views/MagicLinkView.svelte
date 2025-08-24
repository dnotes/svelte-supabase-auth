<script lang="ts">
  import LinkButton from '../LinkButton.svelte'
  import Text from '../Text.svelte'
  import Button from '../Button.svelte'
  import Input from '../Input.svelte'
  import type { SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'

  interface Props {
    supabaseClient: SupabaseClient
    setView: (view: 'sign_in' | 'sign_up' | 'magic_link' | 'forgotten_password') => void
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { supabaseClient, setView, getText }: Props = $props()

  let error = $state('')
  let message = $state('')
  let loading = $state(false)
  let email = $state('')

  async function submit() {
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
  <Button block primary size="large" {loading} icon="inbox">
    {getText('sendLink')}
  </Button>

  <LinkButton onclick={() => setView('sign_in')}>
    {getText('switchToPassword')}
  </LinkButton>

  {#if message}
    <Text>{message}</Text>
  {/if}

  {#if error}
    <Text type="danger">{error}</Text>
  {/if}
</form>
