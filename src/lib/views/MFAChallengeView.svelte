<script lang="ts">
  import InputWrapper from '../elements/InputWrapper.svelte'
  import MFASingleChallenge from './MFASingleChallenge.svelte'
  import type { Factor, SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'
  import { messages } from '$lib/messages.svelte';
  import { needsMFAChallenge } from '$lib/stores.svelte'

  interface Props {
    processing?: boolean|string|number
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let {
    processing = $bindable(false),
    InputWrapper: Wrapper,
    supabaseClient,
    getText
  }: Props = $props()

  let selectedFactor = $state<Factor|null>(null)

  // Load factors as a Promise
  let factorsPromise = $state<Promise<Factor[]>>(loadFactors().catch(err => {
    messages.add('error', getText('networkError', { error: err.message }))
    return []
  }))

  async function loadFactors(): Promise<Factor[]> {
    const { data, error: factorsError } = await supabaseClient.auth.mfa.listFactors()
    if (factorsError) throw factorsError
    if (!data) throw new Error('No factors data returned')

    const verifiedFactors = data.all.filter(
      factor => factor.status === 'verified'
    )

    if (verifiedFactors.length > 0) {
      selectedFactor = verifiedFactors[0]
    }

    return verifiedFactors
  }

  function handleFactorChange(factorId: string, factors: Factor[]) {
    const factor = factors.find(f => f.id === factorId)
    if (factor) {
      selectedFactor = factor
    }
  }
</script>

<div>
  <h2>{getText('mfaEnterCodeHeading')}</h2>
  {#await factorsPromise}
    <p>Loading authentication methods...</p>
  {:then factors}
    {#if factors.length > 1}
      <Wrapper name="factor-select" label={getText('mfaSelectLabel')}>
        <select name="factor-select" id="factor-select" value={selectedFactor?.id} onchange={(e) => handleFactorChange((e.target as HTMLSelectElement).value, factors)}>
          {#each factors as factor, index}
            <option value={factor.id}>
              {factor.friendly_name || `${factor.factor_type.toUpperCase()} ${index + 1}`}
            </option>
          {/each}
        </select>
      </Wrapper>
    {/if}

    {#if selectedFactor}
      <MFASingleChallenge
        cancellable={$needsMFAChallenge === 'toElevate'}
        bind:processing
        InputWrapper={Wrapper}
        {supabaseClient}
        factor={selectedFactor}
        {getText}
      />
    {/if}
  {/await}
</div>


