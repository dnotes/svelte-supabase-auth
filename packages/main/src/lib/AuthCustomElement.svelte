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
      texts: { reflect: true, type: 'String' },
      user: { reflect: true, type: 'Object', attribute: 'user' },
      // property-only (not reflected): allows DI of an existing Supabase client
      supabaseClient: {}
    }
  }}
/>

<script module lang="ts">
  import type { SupabaseClient, Provider, User } from '@supabase/supabase-js'
  import { type AuthTexts } from './i18n'
  import { type PartialSupabaseAuthOptions } from './options'
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
    supabaseClient?: SupabaseClient | null
    user: User | null
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
    locale = 'en',
    authOptions = '{}',
    texts = '{}',
    user = $bindable<User|null>(null),
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
      console.error('supabase-auth: supabaseUrl and supabaseAnonKey are required')
      return null
    }
    return createClient(supabaseUrl, supabaseAnonKey)
  })

</script>

<div dir="auto" class="sA {classes}" {style}>
  {#if !client()}
    <div class="sA-error">Error: supabaseUrl and supabaseAnonKey are required</div>
  {:else}
    <Auth
      supabaseClient={client()!}
      socialLayout={socialLayout}
      socialButtonSize={socialButtonSize}
      providers={parsedProviders()}
      authOptions={parsedAuthOptions()}
      texts={parsedTexts()}
      initialView={initialView}
      locale={locale}
      bind:user={user}
    >
    </Auth>
  {/if}
</div>
