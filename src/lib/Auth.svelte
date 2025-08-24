<script lang="ts">
  import EmailAuthView from './EmailAuthView.svelte'
  import SocialAuthView from './SocialAuthView.svelte'
  import MagicLinkView from './MagicLinkView.svelte'
  import ForgottenPasswordView from './ForgottenPasswordView.svelte'
  import AuthenticatedView from './views/AuthenticatedView.svelte'
  import type { Provider, SupabaseClient, User } from '@supabase/supabase-js'
  import { onMount } from 'svelte'

  interface Props {
    supabaseClient: SupabaseClient
    class?: string
    style?: string
    socialLayout?: 'vertical' | 'horizontal'
    socialColors?: boolean
    socialButtonSize?: 'tiny' | 'small' | 'medium' | 'large'
    providers?: Provider[]
    view?: 'sign_in' | 'sign_up' | 'magic_link' | 'forgotten_password'
  }

  let {
    supabaseClient,
    class: classes = '',
    style = '',
    socialLayout = 'vertical',
    socialColors = false,
    socialButtonSize = 'medium',
    providers = [],
    view = $bindable('sign_in')
  }: Props = $props()

  let user = $state<User | null>(null)
  let loading = $state(true)

  function setView(newView: 'sign_in' | 'sign_up' | 'magic_link' | 'forgotten_password') {
    view = newView
  }

  onMount(() => {
    // Get initial session
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      user = session?.user ?? null
      loading = false
    })

    // Listen for auth changes
    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        user = session?.user ?? null
        loading = false
      }
    )

    return () => subscription.unsubscribe()
  })
</script>

<div class="component {classes}" {style}>
  <div class="container">
    {#if loading}
      <div class="supabase-auth-loading"></div>
    {:else if user}
      <AuthenticatedView {supabaseClient} {user} />
    {:else}
      <SocialAuthView
        {supabaseClient}
        {providers}
        {socialLayout}
        {socialButtonSize}
        {socialColors}
        {view}
      />

      {#if view == 'sign_in' || view == 'sign_up'}
        <EmailAuthView {supabaseClient} {view} {setView}/>
      {:else if view == 'magic_link'}
        <MagicLinkView {supabaseClient} {setView}/>
      {:else if view == 'forgotten_password'}
        <ForgottenPasswordView {supabaseClient} {setView}/>
      {/if}
    {/if}
  </div>
</div>

<style>
  .component {
    width: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
  }
</style>
