<script lang="ts">

  import { email, saOptions } from '$lib/stores.svelte';
  import type { GetText } from '$lib/i18n';
  import { pwnedPassword } from 'hibp'
  import { messages } from '$lib/messages.svelte';
  import Null from 'virtual:icons/tabler/circle-dashed-check'
  import Good from 'virtual:icons/tabler/circle-check-filled'
  import Bad from 'virtual:icons/tabler/alert-circle-filled'
  import Eye from 'virtual:icons/tabler/eye'
  import EyeOff from 'virtual:icons/tabler/eye-off'
  import { debounce, escapeRegExp, isNull } from 'lodash-es';
  import { tick } from 'svelte';

  if (import.meta.env.mode !== 'production') {
    if ($saOptions.passwordPolicy.requiredCharacters.trim()) console.warn('')
  }

  interface Props {
    value: string
    issues?: Promise<string[]>
    validatePassphrase?: () => void
    feedback?: boolean
    getText: GetText
  }

  let {
    value = $bindable(''),
    issues = $bindable(new Promise<string[]>(()=>{})),
    validatePassphrase = $bindable(),
    feedback = $bindable(false),
    getText,
  }:Props = $props()

  let showPassword = $state(false)

  let isBreached:number|null = $state(null)

  let minLength = $derived(
    ( $saOptions.auth.mfa.required || $saOptions.ignoreBestPractices )
    ? Math.max($saOptions.passwordPolicy.minLength, 8) // If we're enforcing MFA or ignoring best practices, use any minimum length
    : Math.max($saOptions.passwordPolicy.minLength, 15) // Otherwise, use a minimum of 15 characters
  )
  let isTooShort = $derived([...value].length < minLength)
  let domainWords = $derived([window.location.hostname.replace(/\.\w+$/g, ''), document.title, $email.split('@')[0]].map(word => {
    return [
      word,
      ...word.split(/[\P{L}&&\P{N}]/v).map(part => part.trim())
    ]
  }).flat().map(escapeRegExp).filter(Boolean))
  let isNotUnique = $derived([...value
    .replace(new RegExp(`(?:${domainWords.join('|')})`, 'gi'), '') // remove words related to site or user
  ].sort().filter((char, index, self) => self.indexOf(char) === index) // remove duplicate characters
    .length < (minLength * .67) // ensure that at least 2/3 of the passphrase is unique non-domain text
  )

  function checkPassword() {
    if ([...value].length >= 6) {
      let promise = feedback
        ? pwnedPassword(value).then(count => isBreached = count).catch(e => messages.add('error', e.message))
        : Promise.resolve()

      issues = (async () => {
        let messages:string[] = []
        await promise.catch(e => messages.push(e.message))
        await tick()
        return [
          isTooShort ? getText('pwLength', { min: minLength }) : false,
          isBreached ? getText('pwBreached', { count: isBreached }) : false,
          (isNotUnique && !isTooShort) ? getText('pwUniqueness') : false,
        ].filter(Boolean) as string[]
      })()
    }
  }

  let pwchecking = debounce(checkPassword, 500)
  validatePassphrase = async()=>{
    feedback = true
    await tick()
    checkPassword()
    await issues
  }

  function handleInput() {
    isBreached = null
    issues = new Promise(()=>{})
    pwchecking()
  }

  // Cleanup function to cancel debounced function when component is destroyed
  $effect(() => {
    return () => {
      pwchecking.cancel()
    }
  })

</script>

{#snippet check(val:any, label:string)}
  <div class="pw-check" aria-label={label} title="{label}" role="checkbox" aria-checked={!val}>
    {#if isNull(val)}
      <Null />
    {:else if !val}
      <Good style="color: var(--success-color);" />
    {:else}
      <Bad style="color: var(--danger-color);" />
    {/if}
  </div>
{/snippet}

<div class="input flex">
  <input type="{showPassword ? 'text' : 'password'}" name="pw" bind:value oninput={handleInput}>
  <button type="button" onclick={() => showPassword = !showPassword}>
    {#if showPassword}
      <Eye />
    {:else}
      <EyeOff />
    {/if}
  </button>
</div>
<div class="pw-strength">
  {#if feedback}
    <div class="pw-checks flex">
      {@render check([...value].length < minLength, getText('pwLengthLabel'))}
      {@render check(isBreached, getText('pwBreachedLabel', { count: isBreached }))}
      {@render check(isNotUnique, getText('pwUniquenessLabel'))}
      {[...value].length} characters
    </div>
    {#if isTooShort}
      <p class="danger">
        {getText('pwLength', { min: minLength })}
      </p>
    {/if}
    {#if isBreached}
      <p class="danger">
        {getText('pwBreached', { count: isBreached })}
      </p>
    {/if}
    {#if isNotUnique && !isTooShort}
      <p class="danger">
        {getText('pwUniqueness')}
      </p>
    {/if}
  {/if}
</div>

<style>
  div { position:relative; }
  div.input { flex-direction: row-reverse; }
  input {
    display: inline-block;
  }
  button {
    display: inline-block;
    position: absolute;
    border: none;
    bottom: 100%;
    color: var(--link-color);
    padding: 3px;
  }
  .pw-strength {
    font-size: 80%;
    line-height: 1em;
    font-weight: 200;
  }
  .pw-checks {
    align-items: center;
    margin-top: 5px;
  }

  p {
    margin: 2px 0;
  }
  p:first-child {
    margin-top: 5px;
  }
</style>