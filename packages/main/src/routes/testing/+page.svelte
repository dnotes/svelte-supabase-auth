<script lang="ts">
  import Auth from '$lib/Auth.svelte'
  import { supabaseClient } from '../supabase'
  import { page } from '$app/state'
  import { SUPABASE_AUTH_DEFAULTS } from '$lib/options'
  import { browser } from '$app/environment'
  import { get, set, has, cloneDeep } from 'lodash-es'
  import type { Provider } from '@supabase/supabase-js';

  let providers = $derived(page.url.searchParams.get('providers')?.split(',') || []) as Provider[]
  let authOptions = cloneDeep(SUPABASE_AUTH_DEFAULTS)
  if (browser) {
    page.url.searchParams.forEach((v,k) => {
      let value:string|number|boolean
      if (v === 'true' || v === 'yes') value = true
      else if (v === 'false' || v === 'no') value = false
      else if (!isNaN(Number(v))) value = Number(v)
      else value = v
      if (has(authOptions, k)) set(authOptions, k, value)
    })
    console.log(authOptions)
  }

</script>

{#if browser}

<div class="mx-auto mt-6 w-120 max-w-full p-5">
  <div class="py-6 px-3 m-4 shadow-md rounded-lg bg-stone-200 dark:bg-stone-800">
    <Auth {supabaseClient} {providers} {authOptions} />
  </div>
</div>

{/if}

<style lang="postcss">
  @reference "tailwindcss";

  @media (min-height: 768px) {
    div.mx-auto.mt-6 {
      @apply mt-48;
    }
  }

</style>