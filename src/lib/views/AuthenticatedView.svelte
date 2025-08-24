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
  }
  .user-info {
    text-align: center;
  }
</style>
