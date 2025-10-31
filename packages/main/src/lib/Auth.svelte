<script module lang="ts">
  import type { SupabaseClient, Provider, User } from '@supabase/supabase-js'
  import type { Snippet } from 'svelte'
  import { type AuthTexts } from './i18n'
  import InputWrapper from './elements/InputWrapper.svelte'
  import { SUPABASE_AUTH_DEFAULTS, type PartialSupabaseAuthOptions, type SupabaseAuthOptions } from './options'
  import { type SignInView } from './stores.svelte'

  // Auth component props interface
  export interface AuthProps {
    supabaseClient: SupabaseClient
    class?: string
    style?: string
    socialLayout?: 'vertical' | 'horizontal'
    socialColors?: boolean
    socialButtonSize?: 'tiny' | 'small' | 'medium' | 'large'
    providers?: Provider[]
    signedInAs?: Snippet<[User|null]>
    userInfo?: Snippet<[User|null]>
    authOptions?: PartialSupabaseAuthOptions
    initialView?: SignInView

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
    supabaseClient,
    class: classes = '',
    style = '',
    socialLayout = 'vertical',
    socialButtonSize = 'medium',
    providers = [],
    initialView = 'sign_in_with_password',
    signedInAs,
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

</script>

<div dir="auto" class="sA {classes}" {style}>
  {#if !$saOptions.auth || $saOptions.auth.enabled === false}
    <p>{getText('noAuthMethods')}</p>
  {:else if $user && !$user.is_anonymous}
    <AuthenticatedView
      InputWrapper={Wrapper ?? InputWrapper}
      {supabaseClient}
      {signedInAs}
      {providers}
      {getText}
      {locale}
      {userInfo}
    />
  {:else if !providers.length && (!$saOptions.auth.email || $saOptions.auth.email.enabled === false)}
    <p>{getText('noAuthMethods')}</p>
  {:else if $emailLinkSent}
    <EmailLinkSentView InputWrapper={Wrapper ?? InputWrapper} {supabaseClient} {getText} />
  {:else if loading}
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

    {#if $saOptions.auth.email && $saOptions.auth.email.enabled && ($signInView == 'sign_in' || $signInView == 'sign_in_with_password')}
      <EmailAuthView InputWrapper={Wrapper ?? InputWrapper} {supabaseClient} {getText} />
    {:else if $signInView == 'forgotten_password'}
      <ForgottenPasswordView InputWrapper={Wrapper ?? InputWrapper} {supabaseClient} {getText}/>
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
    flex: 1;
    padding: var(--input-padding);
    border: 1px solid var(--layout-color);
  }
  :global(.sA form) {
    display: flex;
    gap: var(--flex-gap);
    flex-direction: column;
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
  :global(.sA h3) {
    margin: 0;
  }

  .divider {
    color: var(--layout-color);
    width: 100%;
    align-items: center;
    white-space: nowrap;
    font-size: 80%;
  }

  .divider span {
    margin: var(--flex-gap);
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

</style>
