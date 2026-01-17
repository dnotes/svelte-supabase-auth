<script module lang="ts">
  import type { SupabaseClient, Provider, User } from '@supabase/supabase-js'
  import type { Snippet } from 'svelte'
  import { type AuthTexts } from './i18n'
  import InputWrapper from './elements/InputWrapper.svelte'
  import { SUPABASE_AUTH_DEFAULTS, type PartialSupabaseAuthOptions, type SupabaseAuthOptions } from './options'
  import { type ActiveView, type SignInView } from './stores.svelte'

  // Auth component props interface
  export interface AuthProps {
    supabaseClient: SupabaseClient<any, any, any>
    class?: string
    style?: string
    socialLayout?: 'vertical' | 'horizontal'
    socialColors?: boolean
    socialButtonSize?: 'tiny' | 'small' | 'medium' | 'large'
    providers?: Provider[]
    userInfo?: Snippet<[User|null]>
    authOptions?: PartialSupabaseAuthOptions
    initialView?: SignInView
    activeView?: ActiveView

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
  import AuthenticatedView from './views/AuthenticatedView.svelte'
  import EmailLinkSentView from './views/EmailLinkSentView.svelte'
  import { onMount } from 'svelte'
  import { createGetText } from './i18n'
  import { defaultsDeep } from 'lodash-es'
  import { messages } from './messages.svelte'
  import LinkButton from './elements/LinkButton.svelte';
  import { user, saOptions, socialSettings, emailLinkSent, signInView } from './stores.svelte'

  let {
    supabaseClient,
    class: classes = '',
    style = '',
    socialLayout = 'vertical',
    socialButtonSize = 'medium',
    providers = [],
    initialView = 'sign_in_with_password',
    activeView = $bindable('loading'),
    userInfo,
    InputWrapper:Wrapper,
    authOptions,
    texts,
    locale = 'en',
    t,
  }: AuthProps = $props()

  $saOptions = defaultsDeep(authOptions, SUPABASE_AUTH_DEFAULTS) as SupabaseAuthOptions

  $socialSettings = {
    ...$socialSettings,
    socialLayout,
    socialButtonSize,
  }

  let loading = $state<boolean>(true)

  // Create the getText function with current settings
  const getText = $derived(createGetText(locale, texts, t))

  $signInView = initialView

  onMount(() => {
    // Get initial session
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      $user = session?.user ?? null
      loading = false
    })

    // Listen for auth changes
    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        $user = session?.user ?? null
        loading = false
      }
    )

    return () => subscription.unsubscribe()
  })

  $effect(() => {
    if (!$saOptions.auth || $saOptions.auth.enabled === false || (!providers.length && (!$saOptions.auth.email || $saOptions.auth.email.enabled === false))) activeView = 'no_auth_methods'
    else if ($user && !$user.is_anonymous) activeView = 'authenticated'
    else if ($emailLinkSent) activeView = 'email_link_sent'
    else if (loading) activeView = 'loading'
    else activeView = $signInView
  })

</script>

<div dir="auto" class="sA {classes}" {style}>
  {#if activeView == 'no_auth_methods'}
    <p>{getText('noAuthMethods')}</p>
  {:else if activeView == 'authenticated'}
    <AuthenticatedView
      InputWrapper={Wrapper ?? InputWrapper}
      {supabaseClient}
      {providers}
      {getText}
      {locale}
      {userInfo}
    />
  {:else if activeView == 'email_link_sent'}
    <EmailLinkSentView InputWrapper={Wrapper ?? InputWrapper} {supabaseClient} {getText} />
  {:else if activeView == 'loading'}
    <div class="sA-loading"></div>
  {:else}
    {#if providers.length}
      <SocialAuthView
        {supabaseClient}
        {providers}
        {...$socialSettings}
        {getText}
      />
      <div role="separator" class="divider flex">
        <span>{getText('socialDivider')}</span>
      </div>
    {/if}

    {#if $saOptions.auth.email && $saOptions.auth.email.enabled && ($signInView == 'sign_in' || $signInView == 'sign_in_with_password' || $signInView == 'forgotten_password')}
      <EmailAuthView InputWrapper={Wrapper ?? InputWrapper} {supabaseClient} {getText} />
    {/if}
  {/if}

  {#if $messages.length}
    <ul>
      {#each $messages as message, i}
        <li>
          <span class="message {message.type}">{message.message}</span>
          <LinkButton class="danger" onclick={() => messages.drop(i)}>&cross;</LinkButton>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .sA {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  :global(.sA) {
    color-scheme: light dark;
    
    /* Colors */
    --primary: light-dark(hsl(141, 71%, 48%), hsl(141, 71%, 55%));
    --primary-fg: white;
    --border: light-dark(#e5e7eb, #374151);
    --muted-fg: light-dark(#6b7280, #9ca3af);
    --danger: light-dark(hsl(358, 86%, 58%), hsl(358, 86%, 65%));
    --warning: light-dark(hsl(36, 100%, 44%), hsl(36, 100%, 55%));
    --success: light-dark(hsl(141, 71%, 48%), hsl(141, 71%, 55%));
    --link: currentColor;
    --ring: var(--primary);
    
    /* Layout */
    --radius: 0.375rem;
    --input-padding: 5px 3px 5px 35px;
    --gap: 0.5em;
  }
  :global(.sA .message) {
    font-size: 78%;
    line-height: 1.1em;
    margin: .5em;
  }
  :global(.sA input) {
    display: block;
    width: 100%;
    flex: 1;
    padding: var(--input-padding);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    font-size: .875rem;
    line-height: 1.25rem;
    font-weight: 300;
    background: transparent;
    box-sizing: border-box;
  }
  :global(.sA label) {
    font-weight: 500;
    font-size: .875rem;
    line-height: 1.25rem;
  }

  :global(.sA form) {
    display: flex;
    gap: var(--gap);
    flex-direction: column;
  }
  :global(.sA .flex) {
    display: flex;
    gap: var(--gap);
  }
  :global(.sA ul li) {
    padding: .5em;
    margin: .5em 0;
    display: flex;
    align-items: center;
    gap: var(--gap);
    font-size: 90%;
    border: 1px solid var(--border);
    border-radius: var(--radius);
  }
  :global(.sA ul li span) {
    flex: 1;
  }
  :global(.sA .danger), :global(.sA .error) {
    color: var(--danger);
  }
  :global(.sA .warning) {
    color: var(--warning);
  }
  :global(.sA .success) {
    color: var(--success);
  }
  :global(.sA .primary .icon) {
    color: var(--primary-fg);
  }

  :global(.sA h3) {
    margin: 0;
  }

  /* Add focus styles */
  :global(.sA button:focus-visible),
  :global(.sA input:focus-visible),
  :global(.sA [role="link"]:focus-visible) {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }

  :global(.sA label:has(input:focus) .icon),
  :global(.sA label:has(input:active) .icon) {
    color: inherit;
  }


  .divider {
    color: var(--muted-fg);
    width: 100%;
    align-items: center;
    white-space: nowrap;
    font-size: 80%;
    color: var(--muted-fg);
    font-size: 80%;
  }

  .divider span {
    margin: var(--gap);
  }

  .divider::before, .divider::after {
    border-bottom: 1px solid var(--border);
    top: 50%;
    content: '';
    position: relative;
    display: inline-block;
    width: 50%;
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }

</style>
