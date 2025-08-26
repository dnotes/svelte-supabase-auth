<script lang="ts">
  import Text from '../elements/Text.svelte'
  import InputWrapper from '../elements/InputWrapper.svelte'
  import MFASingleChallenge from './MFASingleChallenge.svelte'
  import type { Factor, SupabaseClient } from '@supabase/supabase-js'
  import type { AuthTexts } from '../i18n'

  interface Props {
    InputWrapper: typeof InputWrapper
    supabaseClient: SupabaseClient
    getText: (key: keyof AuthTexts, params?: Record<string, any>) => string
  }

  let { InputWrapper: Wrapper, supabaseClient, getText }: Props = $props()

  let selectedFactor = $state<Factor|null>(null)

  // Load factors as a Promise
  let factorsPromise = $state<Promise<Factor[]>>(loadFactors())

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
  {#await factorsPromise}
    <p>Loading authentication methods...</p>
  {:then factors}
    {#if factors.length > 1}
      <div>
        <label for="factor-select">Authentication method:</label>
        <select id="factor-select" value={selectedFactor?.id} onchange={(e) => handleFactorChange((e.target as HTMLSelectElement).value, factors)}>
          {#each factors as factor, index}
            <option value={factor.id}>
              {factor.friendly_name || `${factor.factor_type.toUpperCase()} ${index + 1}`}
            </option>
          {/each}
        </select>
      </div>
    {/if}

    {#if selectedFactor}
      <MFASingleChallenge
        InputWrapper={Wrapper}
        {supabaseClient}
        factor={selectedFactor}
        {getText}
      />
    {/if}
  {:catch err}
    <Text type="danger">{err.message || 'Failed to load MFA factors'}</Text>
  {/await}
</div>


