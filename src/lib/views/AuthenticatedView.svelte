<script lang="ts">
  import type { Snippet } from 'svelte';
  import Button from '../elements/Button.svelte'
  import Text from '../elements/Text.svelte'
  import type { SupabaseClient, User } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'

  interface Props {
    supabaseClient: SupabaseClient
    user: User|null
    locale?: string
    loggedInAs?: Snippet<[User|null]>|undefined
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { supabaseClient, user, loggedInAs, getText, locale }: Props = $props()

  let loading = $state(false)
  let error = $state('')

  const time = $derived(user?.last_sign_in_at ? new Date(user?.last_sign_in_at).toLocaleString(locale) : '')

  async function handleSignOut() {
    loading = true
    error = ''

    const { error: signOutError } = await supabaseClient.auth.signOut()
    if (signOutError) {
      error = signOutError.message
    }

    loading = false
  }
</script>

<div class="supabase-auth-authenticated-view">
  <div class="supabase-auth-user-info">
    {#if loggedInAs}
      {@render loggedInAs(user)}
    {:else}
      <p dir="auto">
        {getText('loggedIn')}
        {#if user?.last_sign_in_at}
          <br/>{getText('loggedInTime', { time })}
        {/if}
        {#if user?.email}
          <br/>{getText('loggedInEmail', { email: user?.email ?? ''})}
        {/if}
      </p>
    {/if}
  </div>

  <Button
    block
    size="medium"
    {loading}
    onclick={handleSignOut}
  >
    {getText('signOutButton')}
  </Button>

  {#if error}
    <Text type="danger">{error}</Text>
  {/if}
</div>

<style>
  .supabase-auth-authenticated-view {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
</style>
