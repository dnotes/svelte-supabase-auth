<script lang="ts">

  import { saOptions } from '$lib/stores.svelte';
  import type { GetText } from '$lib/i18n';
  import { pwnedPassword } from 'hibp'
  import { messages } from '$lib/messages.svelte';
  import Null from 'virtual:icons/tabler/circle-dashed-check'
  import Good from 'virtual:icons/tabler/circle-check-filled'
  import Bad from 'virtual:icons/tabler/alert-circle-filled'
  import Eye from 'virtual:icons/tabler/eye'
  import EyeOff from 'virtual:icons/tabler/eye-off'
  import { debounce, isNull } from 'lodash-es';
  import { tick } from 'svelte';

  if (import.meta.env.mode !== 'production') {
    if ($saOptions.passwordPolicy.requiredCharacters.trim()) console.warn('')
  }

  interface Props {
    value: string
    issues?: Promise<string[]>
    feedback?: boolean
    getText: GetText
  }

  let {
    value = $bindable(''),
    issues = $bindable(new Promise<string[]>(()=>{})),
    feedback = false,
    getText,
  }:Props = $props()

  let showPassword = $state(false)

  let isBreached:number|null = $state(null)
  let isRepetitive:boolean|null = $state(null)
  let isDomain:boolean|null = $state(null)

  let minLength = $derived($saOptions.passwordPolicy.minLength ?? 8)
  let isTooShort = $derived(value.length < minLength)
  let isShort = $derived(value.length < $saOptions.passwordPolicy.goodLength)

  let hasLetter = $derived(value.match(/\p{L}/u))
  let hasNumber = $derived(value.match(/\p{N}/u))
  let hasSpace = $derived(value.match(/\p{Zs}/u))
  let hasSpecial = $derived(value.match(/[\p{M}\p{P}\p{S}]/u))
  const passwordStrength = $derived(isNull(isBreached) ? 0 : (isTooShort || isBreached) ? .125 : [
    value.length >= 12,
    value.length >= $saOptions.passwordPolicy.goodLength,
    (isRepetitive === false ? true : false),
    (isDomain === false ? true : false),
    hasLetter,
    hasSpace,
    hasNumber,
    hasSpecial,
  ].filter(Boolean).length / 9)
  const passwordStrengthColor = $derived(passwordStrength >= .75 ? 'var(--success-color)' : passwordStrength >= .5 ? 'var(--warning-color)' : 'var(--danger-color)')

  $inspect([
    value.length >= 12,
    value.length >= $saOptions.passwordPolicy.goodLength,
    (isRepetitive === false ? true : false),
    (isDomain === false ? true : false),
    hasLetter,
    hasSpace,
    hasNumber,
    hasSpecial,
  ])

  function checkPassword() {
    if (value.length >= 6) {
      let promise = pwnedPassword(value).then(count => isBreached = count).catch(e => messages.add('error', e.message))
      isRepetitive = value.split('').sort().filter((char, index, self) => self.indexOf(char) === index).length < minLength
      // get the site url and page title, split into separate words, and get a flat array
      let domainWords = [window.location.hostname.replace(/\.\w+$/g, ''), document.title].map(word => {
        return [
          word,
          ...word.split(/[\P{L}&&\P{N}]/v).map(part => part.trim())
        ]
      }).flat().filter(Boolean)
      isDomain = domainWords.some(word => value.includes(word))
      issues = (async () => {
        let messages:string[] = []
        await promise.catch(e => messages.push(e.message))
        await tick()
        return [
          isBreached ? getText('pwBreached', { count: isBreached }) : false,
          ...messages,
          isDomain ? getText('pwDomain') : false,
          isRepetitive ? getText('pwRepetitive') : false,
          isShort ? getText('pwLength', { min: minLength }) : false,
          isShort && !hasLetter ? getText('pwAddLetter') : false,
          isShort && !hasNumber ? getText('pwAddNumber') : false,
          isShort && !hasSpecial ? getText('pwAddSpecial') : false,
        ].filter(Boolean) as string[]
      })()
    }
  }

  let pwchecking = debounce(checkPassword, 500)

  function handleInput() {
    isBreached = null
    isRepetitive = null
    isDomain = null
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
      <EyeOff />
    {:else}
      <Eye />
    {/if}
  </button>
</div>
<div class="pw-strength">
  {#if feedback}
    <div class="pw-checks flex">
      <div class="pw-meter">
        <div class="pw-meter-fill" style="width:{passwordStrength * 100}%; background-color:{passwordStrengthColor};"></div>
      </div>
      {@render check(isBreached, getText('pwBreachedLabel', { count: isBreached }))}
      {@render check(isRepetitive, getText('pwRepetitiveLabel'))}
      {@render check(isDomain, getText('pwDomainLabel'))}
    </div>
  {/if}
  {#if isBreached}
    <p class="danger">{getText('pwBreached', { count: isBreached })}</p>
  {/if}
  {#if feedback}
    {#if isDomain}
      <p class="danger">{getText('pwDomain')}</p>
    {/if}
    {#if isRepetitive}
      <p class="danger">{getText('pwRepetitive')}</p>
    {/if}
    {#if isShort}
      <p class="{isTooShort ? 'danger' : 'warning'}">{getText('pwLength', { min: minLength })}</p>
      {#if !hasSpace}
        <p>{getText('pwAddSpace')}</p>
      {/if}
      {#if !hasLetter}
        <p>{getText('pwAddLetter')}</p>
      {/if}
      {#if !hasNumber}
        <p>{getText('pwAddNumber')}</p>
      {/if}
      {#if !hasSpecial}
        <p>{getText('pwAddSpecial')}</p>
      {/if}
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
  .pw-meter {
    height: 10px;
    width: 150px;
    border: 1px solid var(--layout-color);
  }
  .pw-meter-fill {
    height: 100%;
  }
  p {
    margin: 2px 0;
  }
  p:first-child {
    margin-top: 5px;
  }
</style>