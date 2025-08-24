<script lang="ts">
  import Button from '../Button.svelte'
  import Text from '../Text.svelte'
  import type { SupabaseClient, User } from '@supabase/supabase-js'

  interface Props {
    supabaseClient: SupabaseClient
    user: User
  }

  let { supabaseClient, user }: Props = $props()

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

<div class="authenticated-view">
  <div class="user-info">
    <Text>You are logged in as {user.email}.</Text>
  </div>

  <Button
    block
    size="medium"
    {loading}
    onclick={handleSignOut}
  >
    Sign Out
  </Button>

  {#if error}
    <Text type="danger">{error}</Text>
  {/if}
</div>

<style>
  .authenticated-view {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #e5e5e5;
    border-radius: 0.5rem;
    background: #f9f9f9;
  }

  .user-info {
    text-align: center;
  }

  .user-details {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-top: 0.5rem;
  }

  .user-details strong {
    font-size: 0.875rem;
    color: #333;
  }

  .name {
    font-size: 0.75rem;
    color: #666;
  }
</style>
