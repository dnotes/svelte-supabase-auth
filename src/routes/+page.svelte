<script lang="ts">

  import type { PartialSupabaseAuthOptions } from '$lib/options';
  import type { Provider } from '@supabase/supabase-js';
  import Auth from '$lib/Auth.svelte'
  import { supabaseClient } from './supabase'
  import '$lib/i18n/languages/ar'
  import '$lib/i18n/languages/es'
  import '$lib/i18n/languages/fr'
  import '$lib/i18n/languages/zh'
  import { defaultTranslations } from '$lib/i18n/index'
  import { languages } from './languages'
  import GearIcon from 'virtual:icons/lucide/settings'
  import Options from './Options.svelte';

  let locale = $state('en')

  // @ts-ignore Import the Supabase config.toml directly
  import config from '../../supabase/config.toml'

  const authOptions:PartialSupabaseAuthOptions = {
    auth: config?.auth, // use the auth config directly from the Supabase config
    passwordPolicy: { // add our password policy
      minLength: 8,
      ignoreLengthRecommendations: true, // enforcing 15 character minimum seems overkill for this application
    },
    deleteAccountFunction: 'delete_user_account',
  }

  let showOptions = $state(false)
  let providers = $state(['google', 'github']) as Provider[]

</script>

{#if showOptions}
  <Options bind:providers bind:showOptions />
{/if}

<button class:hidden={showOptions} class="cursor-pointer fixed top-0 left-0" onclick={() => showOptions = true}><GearIcon width="32" height="32" /></button>

<div class="mx-auto mt-6 w-120 max-w-full p-5">
  <div class="flex justify-end">
    {#each Object.keys(defaultTranslations) as lc}
    <label class="flex items-center px-2 text-xs relative overflow-hidden cursor-pointer {locale == lc ? 'font-bold text-sky-500' : 'text-stone-500'}">
      {languages?.[lc] || lc}
      <input class="absolute -ml-50" type="radio" name="locale" value={lc} bind:group={locale}>
    </label>
    {/each}
  </div>
  <div class="py-6 px-3 m-4 shadow-md rounded-lg bg-stone-200 dark:bg-stone-800">
    <Auth {supabaseClient} {locale} {providers} {authOptions}>
    </Auth>
  </div>
</div>

<style lang="postcss">
  @reference "tailwindcss";

  @media (min-height: 768px) {
    div.mx-auto.mt-6 {
      @apply mt-48;
    }
  }

  :global(div.sA) {
    --link-color: var(--color-sky-500);
    --layout-color: var(--color-stone-500);
    --primary-color: var(--color-sky-500);
    --primary-text-color: var(--color-stone-50);
    --danger-color: var(--color-rose-500);
  }

</style>