<script lang="ts">

  import Auth from '$lib/Auth.svelte'
  import { supabaseClient } from './supabase'
  import '$lib/i18n/ar'
  import '$lib/i18n/es'
  import '$lib/i18n/fr'
  import '$lib/i18n/zh'
  import { defaultTranslations } from '$lib/i18n/index'
  import { languages } from './languages'
  import type { PartialSupabaseAuthOptions, SupabaseAuthOptions } from '$lib/options';

  let locale = $state('en')
  const authOptions: PartialSupabaseAuthOptions = {
    auth: {
      enable_manual_linking: true,
    }
  }

</script>

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
    <Auth {supabaseClient} {locale} providers={['google', 'github']} {authOptions}>
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