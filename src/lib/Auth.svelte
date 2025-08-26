<script module lang="ts">
  import type { SupabaseClient, Provider, User } from '@supabase/supabase-js'
  import type { Snippet } from 'svelte'
  import type { AuthTexts } from './i18n'
  import InputWrapper from './elements/InputWrapper.svelte'

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
    loggedInAs?: Snippet<[User|null]>

    // Components
    InputWrapper?: typeof InputWrapper

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
  import { createGetText } from './i18n'

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
    InputWrapper:Wrapper,
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

<div dir="auto" class="supabase-auth {classes}" {style}>
  {#if user && !user.is_anonymous}
    <AuthenticatedView {supabaseClient} {user} {loggedInAs} {getText} {locale} />
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
      <EmailAuthView InputWrapper={Wrapper ?? InputWrapper} {supabaseClient} {view} {setView} {getText}/>
    {:else if view == 'magic_link'}
      <MagicLinkView InputWrapper={Wrapper ?? InputWrapper} {supabaseClient} {setView} {getText}/>
    {:else if view == 'forgotten_password'}
      <ForgottenPasswordView InputWrapper={Wrapper ?? InputWrapper} {supabaseClient} {setView} {getText}/>
    {/if}
  {/if}
</div>

<style>
  .supabase-auth {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  :global(.supabase-auth) {
    --input-padding: 5px 3px 5px 35px;
    --link-color: blue;
    --layout-color: #ccc;
    --primary-color: rgba(101, 217, 165);
    --primary-text-color: #fff;
    --danger-color: rgba(245, 101, 101);
  }
  :global(.supabase-auth input) {
    display: block;
    width: 100%;
    padding: var(--input-padding);
  }
</style>
