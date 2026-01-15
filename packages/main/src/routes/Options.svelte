<script lang="ts">
  import { providerList } from '$lib/providers'
  import { socialSettings } from '$lib/stores.svelte';
  import { quintIn } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import XIcon from 'virtual:icons/lucide/x'

  let {
    providers = $bindable([]),
    showOptions = $bindable(false)
  } = $props()

</script>

<div role="dialog" aria-label="Options" class="max-w-full px-5 pb-5 fixed z-10 top-0 left-0 max-h-[calc(100vh-34px)] overflow-y-auto
  bg-stone-700 prose prose-sm prose-stone prose-invert {showOptions ? 'w-48' : 'w-0'}" transition:fly={{ duration:170, x:-180, easing:quintIn }}>
  <button class="absolute top-0 left-0 cursor-pointer" aria-label="Close options" onclick={() => showOptions = false}><XIcon role="presentation" width="32" height="32"/></button>

  <h3>Providers</h3>
  <p class="text-xs leading-tight italic">Only Google and GitHub really function, regardless of which are shown.</p>
  <div class="field">
    {#each Object.entries(providerList) as [provider, name]}
      <label class="block">
        <input type="checkbox" value={provider} bind:group={providers} />
        <span class:text-sky-600={['google', 'github'].includes(provider)}>{name}</span>
      </label>
    {/each}
  </div>

  <h3>Options</h3>

  <div class="field my-2">
    <label class="flex flex-col">
      <span>Social Layout</span>
      <select bind:value={$socialSettings.socialLayout}>
        <option value="vertical">Vertical</option>
        <option value="horizontal">Horizontal</option>
      </select>
    </label>
  </div>

  <div class="field my-2">
    <label class="flex flex-col">
      <span>Social Button Size</span>
      <select bind:value={$socialSettings.socialButtonSize}>
        <option value="tiny">Tiny</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </label>

  </div>


</div>

<style lang="postcss">
  @reference "tailwindcss";
  select {
    @apply text-sky-600 text-sm;
  }
</style>