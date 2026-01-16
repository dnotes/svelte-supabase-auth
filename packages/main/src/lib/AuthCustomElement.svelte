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
      activeView: { reflect: true, type: 'String', attribute: 'active-view' },
      locale: { reflect: true, type: 'String' },
      authOptions: { reflect: true, type: 'String', attribute: 'auth-options' },
      texts: { reflect: true, type: 'String' },
      hideUserInfo: { type: 'Boolean', attribute: 'hide-user-info' },
      // property-only (not reflected): allows DI of an existing Supabase client
      supabaseClient: {}
    }
  }}
/>

<script module lang="ts">
  import type { SupabaseClient, Provider } from '@supabase/supabase-js'
  import { type AuthTexts } from './i18n'
  import { type PartialSupabaseAuthOptions } from './options'
  import { type ActiveView, type SignInView } from './stores.svelte'

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
    activeView?: ActiveView
    locale?: string
    authOptions?: string // JSON string of PartialSupabaseAuthOptions
    texts?: string // JSON string of Partial<AuthTexts>
    hideUserInfo?: boolean
    supabaseClient?: SupabaseClient | null
  }
</script>

<script lang="ts">
  import { createClient } from '@supabase/supabase-js'
  import Auth from './Auth.svelte'

  let {
    supabaseUrl,
    supabaseAnonKey,
    class: classes = '',
    style = '',
    socialLayout = 'vertical',
    socialButtonSize = 'medium',
    providers = '[]',
    initialView = 'sign_in_with_password',
    activeView = $bindable('loading'),
    locale = 'en',
    authOptions = '{}',
    texts = '{}',
    hideUserInfo = false,
    // Optional injected client; if provided we will use it instead of creating our own
    supabaseClient: injectedSupabaseClient = null,
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

  // Resolve Supabase client: prefer injected, otherwise create from URL/Anon key
  const client = $derived(() => {
    if (injectedSupabaseClient) return injectedSupabaseClient
    if (!supabaseUrl || !supabaseAnonKey) {
      return null
    }
    return createClient(supabaseUrl, supabaseAnonKey)
  })

</script>

{#snippet noSnippet()}
  <div style="display: none;"></div>
{/snippet}

{#if !client()}
  <div class="sA-error {classes}" style={style}>Error: Supabase client could not be created. Please check supabaseUrl and supabaseAnonKey.</div>
{:else}
  <Auth
    supabaseClient={client()!}
    socialLayout={socialLayout}
    socialButtonSize={socialButtonSize}
    providers={parsedProviders()}
    authOptions={parsedAuthOptions()}
    texts={parsedTexts()}
    initialView={initialView}
    bind:activeView
    userInfo={hideUserInfo ? noSnippet : undefined}
    locale={locale}
    class={classes}
    style={style}
  />
{/if}
