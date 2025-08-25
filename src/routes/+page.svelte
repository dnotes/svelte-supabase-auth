<script lang="ts">
  import Auth from '$lib/Auth.svelte'
  import { supabaseClient } from './supabase'
  import '$lib/i18n/ar'
  import '$lib/i18n/es'
  import '$lib/i18n/fr'
  import '$lib/i18n/zh'
  import { defaultTranslations } from '$lib/i18n/index'
  import { languages } from './languages'

  let locale = $state('en')

</script>

<div class="mx-auto mt-6 md:mt-48 w-120 max-w-full p-5">
  <div class="flex justify-end">
    {#each Object.keys(defaultTranslations) as lc}
    <label class="flex items-center px-2 text-xs relative overflow-hidden cursor-pointer {locale == lc ? 'font-bold text-sky-500' : 'text-stone-500'}">
      {languages?.[lc] || lc}
      <input class="absolute -ml-50" type="radio" name="locale" value={lc} bind:group={locale}>
    </label>
    {/each}
  </div>
  <Auth {supabaseClient} {locale} providers={['apple', 'google', 'github']}>
  </Auth>
</div>