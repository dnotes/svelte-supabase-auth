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
  import config from '../../../../supabase/config.toml'

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

<button class:hidden={showOptions} class="cursor-pointer fixed top-2 left-2" aria-label="Show options menu" onclick={() => showOptions = true}><GearIcon role="presentation" width="32" height="32" /></button>

<div class="login-wrapper mx-auto w-120 max-w-full p-5">
  <div class="flex justify-end">
    {#each Object.keys(defaultTranslations) as lc}
    <label class="flex items-center px-2 text-xs relative overflow-hidden cursor-pointer {locale == lc ? 'font-bold text-link' : 'text-muted'}">
      {languages?.[lc] || lc}
      <input class="absolute -ml-50" type="radio" name="locale" value={lc} bind:group={locale}>
    </label>
    {/each}
  </div>
  <div class="py-6 px-3 m-4 shadow-md rounded-lg bg-stone-200 dark:bg-stone-800">
    <Auth {supabaseClient} {locale} {providers} {authOptions}>
      {#snippet userInfo(user)}
        <div class="prose prose-sm prose-stone dark:prose-invert prose-p:leading-tight">
          <h2>You are signed in!</h2>
          <p>
            You are signed in as {user?.email}, an account created on 
            {user?.created_at ? new Date(user?.created_at).toLocaleDateString() : '[unknown date]'}.
          </p>
          <p>
            To see more information about Svelte Supabase Auth, the all-in-one front-end solution 
            for Supabase authentication, visit the <a href="/about">about</a> page or try out the 
            default functionality provided in the sections below.
          </p>
        </div>
      {/snippet}
    </Auth>
  </div>
</div>
