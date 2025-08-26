<script lang="ts">
  import Button from '../elements/Button.svelte'
  import Text from '../elements/Text.svelte'
  import type { Provider, SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'

  interface Props {
    supabaseClient: SupabaseClient
    providers: Provider[]
    socialLayout: 'vertical' | 'horizontal'
    socialButtonSize: 'tiny' | 'small' | 'medium' | 'large'
    socialColors: boolean
    view: 'sign_in' | 'sign_up' | 'magic_link' | 'forgotten_password'
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { supabaseClient, providers, socialLayout, socialButtonSize, socialColors, view, getText }: Props = $props()

  let loading = $state(false)
  let error = $state('')

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

    const { error: signInError } = await supabaseClient.auth.signInWithOAuth({ provider })
    if (signInError) error = signInError.message

    loading = false
  }
</script>

{#if hasProviders}
  <span class="heading">
    {view == 'sign_up' ? getText('socialSignUpHeading') : getText('socialSignInHeading')}
  </span>

  <div class="providers" class:horizontal={socialLayout == 'horizontal'}>
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
          {getText('socialSignIn', {provider: providerName})}
        {/if}
      </Button>
    {/each}
  </div>
  <div role="separator" class="divider">
    <span>{getText('socialDivider')}</span>
  </div>
{/if}

{#if error}
  <Text type="danger">{error}</Text>
{/if}

<style>
  .providers {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .providers.horizontal {
    flex-direction: row;
  }

  .divider {
    color: rgb(187, 187, 187);
    width: 100%;
    display: flex;
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

  .heading {
    margin: 0 0 0.5rem 0;
  }
</style>
