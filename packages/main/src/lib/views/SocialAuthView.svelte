<script lang="ts">
  import Button from '../elements/Button.svelte'
  import type { Provider, SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import { messages } from '$lib/messages.svelte';
  import { providerList } from '$lib/providers'

  interface Props {
    supabaseClient: SupabaseClient
    providers: Provider[]
    socialLayout: 'vertical' | 'horizontal'
    socialButtonSize: 'tiny' | 'small' | 'medium' | 'large'
    isLinking?: boolean
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { supabaseClient, providers, socialLayout, socialButtonSize, isLinking, getText }: Props = $props()

  let loading = $state(false)

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

  <div class="providers flex" class:horizontal={socialLayout === 'horizontal'}>
    {#each providers as provider}
      {#if socialLayout === 'vertical'}
        <Button
          class="provider-{provider}"
          block
          icon={provider}
          size={socialButtonSize}
          onclick={() => handleProviderSignIn(provider)}
        >
          {getText(isLinking ? 'socialLinking' : 'socialSignIn', {provider: providerList[provider]})}
        </Button>
      {:else}
        <Button
          class="provider-{provider}"
          icon={provider}
          size={socialButtonSize}
          onclick={() => handleProviderSignIn(provider)}
        />
      {/if}
    {/each}
  </div>
{/if}

<style>
  .providers {
    flex-direction: column;
  }

  .providers.horizontal {
    flex-direction: row;
    max-width: 100%;
    flex-wrap: wrap;
  }

  .heading {
    margin: 0 0 0.5rem 0;
  }
</style>
