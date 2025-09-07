<script lang="ts">
  import type { Snippet } from 'svelte';
  import Icon from './Icon.svelte'

  interface Props {
    submit?: boolean
    block?: boolean
    primary?: boolean
    disabled?: boolean
    size?: 'tiny' | 'small' | 'medium' | 'large'
    loading?: boolean
    icon?: string | null
    style?: Record<string, string>
    onclick?: () => void
    children: Snippet
  }

  let {
    submit = false,
    block = false,
    primary = false,
    disabled = false,
    size = 'tiny',
    loading = false,
    icon = null,
    style = {},
    onclick,
    children,
  }: Props = $props()

  const styleString = $derived(Object.entries(style).map(([key, value]) => {
    return `${key}: ${value}`
  }).join(';'))
</script>

<button type={submit ? 'submit' : 'button'} class:block class={size} class:primary style={styleString} onclick={onclick} disabled={disabled || loading}>
  {#if icon}
    <span class="icon flex">
      <Icon name={icon} size=21/>
    </span>
  {/if}
  <span>
    {@render children?.()}
  </span>
</button>

<style>
  button {
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    position: relative;
  }

  button.large {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  button.medium {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  button.block {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
</style>
