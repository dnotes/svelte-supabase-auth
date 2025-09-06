<script lang="ts">
  import Button from '../elements/Button.svelte'
  import type { Provider, SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import { messages } from '$lib/messages.svelte';

  interface Props {
    supabaseClient: SupabaseClient
    providers: Provider[]
    socialLayout: 'vertical' | 'horizontal'
    socialButtonSize: 'tiny' | 'small' | 'medium' | 'large'
    socialColors: boolean
    isLinking?: boolean
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { supabaseClient, providers, socialLayout, socialButtonSize, socialColors, isLinking, getText }: Props = $props()

  let loading = $state(false)

  const buttonStyles: Partial<Record<Provider, Record<string, string>>> = {
    google: {
      'background-color': '#ce4430',
      color: 'white',
    },
    facebook: {
      'background-color': '#4267B2',
      color: 'white',
    },
    twitter: {
      'background-color': '#1DA1F2',
    },
    gitlab: {
      'background-color': '#FC6D27',
    },
    github: {
      'background-color': '#333',
      color: 'white',
    },
    bitbucket: {
      'background-color': '#205081',
      color: 'white',
    },
    azure: {
      'background-color': '#0072c6',
      color: 'white',
    },
    discord: {
      'background-color': '#5865F2',
      color: 'white',
    }
  }

  const hasProviders = $derived(providers && providers.length > 0)

  async function handleProviderSignIn(provider: Provider) {
    loading = true

    if (isLinking) {
      const { error: linkError } = await supabaseClient.auth.linkIdentity({ provider })
      if (linkError) messages.add('error', linkError.message)
    } else {
      const { error: signInError } = await supabaseClient.auth.signInWithOAuth({ provider })
      if (signInError) messages.add('error', signInError.message)
    }
    loading = false
  }
</script>

{#if hasProviders}
  {#if socialLayout === 'horizontal'}
    <span class="heading">
      {getText('socialHeading')}
    </span>
  {/if}

  <div class="providers flex" class:horizontal={socialLayout == 'horizontal'}>
    {#each providers as provider}
      {@const providerName = provider.charAt(0).toUpperCase() + provider.slice(1)}
      <Button
        block
        shadow
        icon={provider}
        size={socialButtonSize}
        style={socialColors ? (buttonStyles[provider] || {}) : {}}
        onclick={() => handleProviderSignIn(provider)}
      >
        {#if socialLayout == 'vertical'}
          {getText(isLinking ? 'socialLinking' : 'socialSignIn', {provider: providerName})}
        {/if}
      </Button>
    {/each}
  </div>
{/if}

<style>
  .providers {
    flex-direction: column;
  }

  .providers.horizontal {
    flex-direction: row;
  }

  .heading {
    margin: 0 0 0.5rem 0;
  }
</style>
