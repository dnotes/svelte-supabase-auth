<script module lang="ts">
  import type { SupabaseClient, Provider, User } from '@supabase/supabase-js'
  import type { Snippet } from 'svelte'
  import { type AuthTexts } from './i18n'
  import InputWrapper from './elements/InputWrapper.svelte'
  import { SUPABASE_AUTH_DEFAULTS, type PartialSupabaseAuthOptions, type SupabaseAuthOptions } from './options'
  import { emailLinkSent, signInView, type SignInView } from './stores.svelte'

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
  import { user, saOptions } from './stores.svelte'

  let {
    supabaseClient,
    class: classes = '',
    style = '',
    socialLayout = 'vertical',
    socialColors = false,
    socialButtonSize = 'medium',
    providers = [],
    initialView = 'sign_in',
    signedInAs,
    userInfo,
    InputWrapper:Wrapper,
    authOptions,
    texts,
    locale = 'en',
    t,
  }: AuthProps = $props()

  $saOptions = defaultsDeep(authOptions, SUPABASE_AUTH_DEFAULTS) as SupabaseAuthOptions

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
  {#if $user && !$user.is_anonymous}
    <AuthenticatedView
      InputWrapper={Wrapper ?? InputWrapper}
      {supabaseClient}
      {signedInAs}
      {providers}
      {getText}
      {locale}
      {userInfo}
    />
  {:else if $emailLinkSent}
    <EmailLinkSentView InputWrapper={Wrapper ?? InputWrapper} {supabaseClient} {getText} />
  {:else if loading}
    <div class="sA-loading"></div>
  {:else}
    <SocialAuthView
      {supabaseClient}
      {providers}
      {socialLayout}
      {socialButtonSize}
      {socialColors}
      {getText}
    />

    {#if $saOptions.auth.email && ($signInView == 'sign_in' || $signInView == 'sign_in_with_password')}
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
    --primary-color: rgba(101, 217, 165);
    --primary-text-color: white;
    --danger-color: rgba(245, 101, 101);
    --warning-color: rgba(255, 202, 40);
    --success-color: rgba(101, 217, 165);
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
  :global(.sA ul) {
    padding: .5em 0;
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
</style>
