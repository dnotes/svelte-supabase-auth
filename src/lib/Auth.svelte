<script module lang="ts">
  import type { SupabaseClient, Provider, User } from '@supabase/supabase-js'
  import type { Snippet } from 'svelte'
  import type { AuthTexts } from './i18n.js'

  // Auth component props interface
  export interface AuthProps {
    supabaseClient: SupabaseClient
    class?: string
    style?: string
    socialLayout?: 'vertical' | 'horizontal'
    socialColors?: boolean
    socialButtonSize?: 'tiny' | 'small' | 'medium' | 'large'
    providers?: Provider[]
    view?: 'sign_in' | 'sign_up' | 'magic_link' | 'forgotten_password'
    loggedInAs?: Snippet<[User]>

    // Internationalization
    texts?: Partial<AuthTexts>
    locale?: string
    t?: (key: string, params?: Record<string, any>) => string
  }
</script>

<script lang="ts">
  import EmailAuthView from './views/EmailAuthView.svelte'
  import SocialAuthView from './views/SocialAuthView.svelte'
  import MagicLinkView from './views/MagicLinkView.svelte'
  import ForgottenPasswordView from './views/ForgottenPasswordView.svelte'
  import AuthenticatedView from './views/AuthenticatedView.svelte'
  import { onMount } from 'svelte'
  import { createGetText } from './i18n.js'

  let {
    supabaseClient,
    class: classes = '',
    style = '',
    socialLayout = 'vertical',
    socialColors = false,
    socialButtonSize = 'medium',
    providers = [],
    view = 'sign_in',
    loggedInAs,
    texts,
    locale = 'en',
    t,
  }: AuthProps = $props()

  let user = $state<User|null>(null)
  let loading = $state<boolean>(true)

  // Create the getText function with current settings
  const getText = $derived(createGetText(locale, texts, t))

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
    {#if user && !user.is_anonymous}
      <AuthenticatedView {supabaseClient} {user} {loggedInAs} {getText} />
    {:else if loading}
      <div class="supabase-auth-loading"></div>
    {:else}
      <SocialAuthView
        {supabaseClient}
        {providers}
        {socialLayout}
        {socialButtonSize}
        {socialColors}
        {view}
        {getText}
      />

      {#if view == 'sign_in' || view == 'sign_up'}
        <EmailAuthView {supabaseClient} {view} {setView} {getText}/>
      {:else if view == 'magic_link'}
        <MagicLinkView {supabaseClient} {setView} {getText}/>
      {:else if view == 'forgotten_password'}
        <ForgottenPasswordView {supabaseClient} {setView} {getText}/>
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
