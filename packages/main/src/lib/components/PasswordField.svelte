<script lang="ts">

  import { email, saOptions } from '$lib/stores.svelte';
  import type { GetText } from '$lib/i18n';
  import { pwnedPassword } from 'hibp'
  import { messages } from '$lib/messages.svelte';
  import { iconData } from '../elements/iconData.js';

  import { debounce, escapeRegExp, isNull } from 'lodash-es';
  import { tick } from 'svelte';
  import Icon from '$lib/elements/Icon.svelte';

  interface Props {
    value: string
    validate?: () => void
    isGood?: boolean
    feedback?: boolean
    getText: GetText
  }

  let {
    value = $bindable(''),
    validate = $bindable(),
    isGood = $bindable(false),
    feedback = $bindable(false),
    getText,
  }:Props = $props()

  let showPassword = $state(false)

  let isBreached:number|null = $state(null)
  let isNotPwned = $state(false)

  let minLength = $derived(
    ( $saOptions.auth.mfa.required || $saOptions.passwordPolicy.ignoreLengthRecommendations )
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
  let uniqueValue = $derived(value.replace(new RegExp(`(?:${domainWords.join('|')})`, 'gi'), ''))
  let isNotUnique = $derived(
    [...uniqueValue] // remove words related to site or user
    .sort().filter((char, index, self) => self.indexOf(char) === index) // remove duplicate characters
    .length < (minLength * .67) // ensure that at least 2/3 of the passphrase is unique non-domain text
  )

  async function checkPassword() {
    isGood = false
    isNotPwned = false
    isBreached = null
    if ([...value].length >= 6 && feedback) {
      try {
        isBreached = await pwnedPassword(value)
      }
      catch (e:any) {
        messages.add('error', e.message)
        return
      }

      if (!isBreached && !isNotUnique && !isTooShort) {
        isGood = true
      }
    }
  }

  let pwchecking = debounce(checkPassword, 500)
  validate = async()=>{
    feedback = true
    await tick()
    await checkPassword()
  }

  function handleInput() {
    isBreached = null
    isGood = false
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
      <Icon name="circledashed" />
    {:else if !val}
      <span style="color: var(--success-color);">
        <Icon name="circlecheck" />
      </span>
    {:else}
      <span style="color: var(--danger-color);">
        <Icon name="circlealert" />
      </span>
    {/if}
  </div>
{/snippet}

<div class="input flex">
  <input type="{showPassword ? 'text' : 'password'}" name="pw" bind:value oninput={handleInput}>
  <button type="button" onclick={() => showPassword = !showPassword}>
    {#if showPassword}
      <Icon name="eye" />
    {:else}
      <Icon name="eyeoff" />
    {/if}
  </button>
</div>
<div class="pw-strength">
  {#if feedback}
    <div class="pw-checks flex">
      {@render check([...value].length < minLength, getText('pwLengthLabel'))}
      {@render check(isBreached, getText('pwBreachedLabel', { count: isBreached }))}
      {@render check(isNotUnique, getText('pwUniquenessLabel'))}
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