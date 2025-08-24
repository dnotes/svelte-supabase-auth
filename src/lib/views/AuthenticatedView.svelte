<script lang="ts">
  import type { Snippet } from 'svelte';
  import Button from '../Button.svelte'
  import Text from '../Text.svelte'
  import type { SupabaseClient, User } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n.js'

  interface Props {
    supabaseClient: SupabaseClient
    user: User|null
    loggedInAs?: Snippet<[User]>|undefined
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { supabaseClient, user, loggedInAs, getText }: Props = $props()

  let loading = $state(false)
  let error = $state('')

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

{#snippet defaultLoggedInAs(user:User|null)}
  <p>
    {#if user?.last_sign_in_at}
      {getText('loggedInSince')} {new Date(user?.last_sign_in_at).toLocaleString()}.
    {:else}
      {getText('loggedIn')}
    {/if}
    {#if user?.email}
      <br/>Email: {user?.email}
    {/if}
    {#if user?.phone}
      <br/>Phone: {user?.phone}
    {/if}
  </p>
{/snippet}

<div class="supabase-auth-authenticated-view">
  <div class="supabase-auth-user-info">
    {#if loggedInAs && user}
      {@render loggedInAs(user)}
    {:else}
      {@render defaultLoggedInAs(user)}
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
