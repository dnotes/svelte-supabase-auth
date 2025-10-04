<svelte:options
  customElement={{
    tag: 'supabase-auth',
    shadow: 'none',
    props: {
      supabaseUrl: { reflect: true, type: 'String', attribute: 'supabase-url' },
      supabaseAnonKey: { reflect: true, type: 'String', attribute: 'supabase-anon-key' },
      socialLayout: { reflect: true, type: 'String', attribute: 'social-layout' },
      socialButtonSize: { reflect: true, type: 'String', attribute: 'social-button-size' },
      providers: { reflect: true, type: 'String' },
      initialView: { reflect: true, type: 'String', attribute: 'initial-view' },
      locale: { reflect: true, type: 'String' },
      authOptions: { reflect: true, type: 'String', attribute: 'auth-options' },
      texts: { reflect: true, type: 'String' }
    }
  }}
/>

<script module lang="ts">
  import type { SupabaseClient, Provider, User } from '@supabase/supabase-js'
  import type { Snippet } from 'svelte'
  import { type AuthTexts } from './i18n'
  import InputWrapper from './elements/InputWrapper.svelte'
  import { SUPABASE_AUTH_DEFAULTS, type PartialSupabaseAuthOptions, type SupabaseAuthOptions } from './options'
  import { type SignInView } from './stores.svelte'

  // Custom element props interface - simplified for web component usage
  export interface AuthCustomElementProps {
    supabaseUrl: string
    supabaseAnonKey: string
    class?: string
    style?: string
    socialLayout?: 'vertical' | 'horizontal'
    socialButtonSize?: 'tiny' | 'small' | 'medium' | 'large'
    providers?: string // JSON string of Provider[]
    initialView?: SignInView
    locale?: string
    authOptions?: string // JSON string of PartialSupabaseAuthOptions
    texts?: string // JSON string of Partial<AuthTexts>
  }
</script>

<script lang="ts">
  import { createClient } from '@supabase/supabase-js'
  import EmailAuthView from './views/EmailAuthView.svelte'
  import SocialAuthView from './views/SocialAuthView.svelte'
  import ForgottenPasswordView from './views/ForgottenPasswordView.svelte'
  import AuthenticatedView from './views/AuthenticatedView.svelte'
  import EmailLinkSentView from './views/EmailLinkSentView.svelte'
  import { onMount } from 'svelte'
  import { createGetText } from './i18n'
  import { defaultsDeep } from 'lodash-es'
  import { messages } from './messages.svelte'
  import LinkButton from './elements/LinkButton.svelte';
  import { user, saOptions, socialSettings, emailLinkSent, signInView } from './stores.svelte'

  let {
    supabaseUrl,
    supabaseAnonKey,
    class: classes = '',
    style = '',
    socialLayout = 'vertical',
    socialButtonSize = 'medium',
    providers = '[]',
    initialView = 'sign_in_with_password',
    locale = 'en',
    authOptions = '{}',
    texts = '{}',
  }: AuthCustomElementProps = $props()

  // Parse JSON strings to objects
  const parsedProviders = $derived(() => {
    try {
      return JSON.parse(providers) as Provider[]
    } catch {
      return [] as Provider[]
    }
  })

  const parsedAuthOptions = $derived(() => {
    try {
      return JSON.parse(authOptions) as PartialSupabaseAuthOptions
    } catch {
      return {} as PartialSupabaseAuthOptions
    }
  })

  const parsedTexts = $derived(() => {
    try {
      return JSON.parse(texts) as Partial<AuthTexts>
    } catch {
      return {} as Partial<AuthTexts>
    }
  })

  // Create Supabase client
  const supabaseClient = $derived(() => {
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('supabase-auth: supabaseUrl and supabaseAnonKey are required')
      return null
    }
    return createClient(supabaseUrl, supabaseAnonKey)
  })

  $saOptions = defaultsDeep(parsedAuthOptions(), SUPABASE_AUTH_DEFAULTS) as SupabaseAuthOptions

  $socialSettings = {
    ...$socialSettings,
    socialLayout,
    socialButtonSize,
  }

  let loading = $state<boolean>(true)

  // Create the getText function with current settings
  const getText = $derived(createGetText(locale, parsedTexts()))

  $signInView = initialView

  onMount(() => {
    if (!supabaseClient()) {
      loading = false
      return
    }

    // Get initial session
    supabaseClient()!.auth.getSession().then(({ data: { session } }) => {
      $user = session?.user ?? null
      loading = false
    })

    // Listen for auth changes
    const { data: { subscription } } = supabaseClient()!.auth.onAuthStateChange(
      (event, session) => {
        $user = session?.user ?? null
        loading = false
      }
    )

    return () => subscription.unsubscribe()
  })

  // Expose user state for external access
  $effect(() => {
    if ($host()) {
      ($host() as any).user = $user
    }
  })

</script>

<div dir="auto" class="sA {classes}" {style}>
  {#if !supabaseClient()}
    <div class="sA-error">Error: supabaseUrl and supabaseAnonKey are required</div>
  {:else if $user && !$user.is_anonymous}
    <AuthenticatedView
      InputWrapper={InputWrapper}
      supabaseClient={supabaseClient()!}
      providers={parsedProviders()}
      {getText}
      {locale}
    />
  {:else if $emailLinkSent}
    <EmailLinkSentView InputWrapper={InputWrapper} supabaseClient={supabaseClient()!} {getText} />
  {:else if loading}
    <div class="sA-loading"></div>
  {:else}
    {#if parsedProviders().length}
      <SocialAuthView
        supabaseClient={supabaseClient()!}
        providers={parsedProviders()}
        {...$socialSettings}
        {getText}
      />
      <div role="separator" class="divider flex">
        <span>{getText('socialDivider')}</span>
      </div>
    {/if}

    {#if $saOptions.auth.email && ($signInView == 'sign_in' || $signInView == 'sign_in_with_password')}
      <EmailAuthView InputWrapper={InputWrapper} supabaseClient={supabaseClient()!} {getText} />
    {:else if $signInView == 'forgotten_password'}
      <ForgottenPasswordView InputWrapper={InputWrapper} supabaseClient={supabaseClient()!} {getText}/>
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
    --flex-gap: .5em;
    --input-padding: 5px 3px 5px 35px;
    --link-color: blue;
    --layout-color: #ccc;
    --primary-color: hsl(141, 71%, 48%);
    --primary-text-color: white;
    --danger-color: hsl(358, 86%, 58%);
    --warning-color: hsl(36, 100%, 44%);
    --success-color: hsl(141, 71%, 48%);
  }
  :global(.sA .message) {
    font-size: 78%;
    line-height: 1.1em;
    margin: .5em;
  }
  :global(.sA input) {
    display: block;
    width: 100%;
    padding: var(--input-padding);
  }
  :global(.sA form) {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  :global(.sA .flex) {
    display: flex;
    gap: var(--flex-gap);
  }
  :global(.sA ul li) {
    padding: .5em;
    margin: .5em 0;
    display: flex;
    align-items: center;
    gap: var(--flex-gap);
  }
  :global(.sA ul li span) {
    flex: 1;
  }
  :global(.sA .danger), :global(.sA .error) {
    color: var(--danger-color);
  }
  :global(.sA .warning) {
    color: var(--warning-color);
  }

  .divider {
    color: var(--layout-color);
    width: 100%;
    align-items: center;
    white-space: nowrap;
    font-size: 80%;
  }

  .divider span {
    margin: 1rem;
  }

  .divider::before, .divider::after {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    top: 50%;
    content: '';
    position: relative;
    display: inline-block;
    width: 50%;
  }

  .sA-error {
    color: var(--danger-color);
    padding: 1rem;
    text-align: center;
  }

  .sA-loading {
    padding: 2rem;
    text-align: center;
  }
</style>

