<script lang="ts">
  import type { Snippet } from 'svelte';
  import Icon from './Icon.svelte'
  import type { IconData } from './iconData';

  interface Props {
    submit?: boolean
    block?: boolean
    primary?: boolean
    danger?: boolean
    disabled?: boolean
    size?: 'tiny' | 'small' | 'medium' | 'large'
    loading?: boolean
    icon?: keyof IconData | null
    style?: Record<string, string>
    onclick?: () => void
    children?: Snippet
    class?: string
    [key: string]: any
  }

  let {
    submit = false,
    block = false,
    primary = false,
    danger = false,
    disabled = false,
    size = 'tiny',
    loading = false,
    icon = null,
    style = {},
    onclick,
    children,
    class:classText,
    ...rest
  }: Props = $props()

  const styleString = $derived(Object.entries(style).map(([key, value]) => {
    return `${key}: ${value}`
  }).join(';'))
</script>

<button type={submit ? 'submit' : 'button'} class="{classText} {size}" class:block class:primary class:danger style={styleString} onclick={onclick} disabled={disabled || loading} {...rest}>
  {#if icon}
    <span class="icon flex">
      <Icon name={icon} size={size === 'tiny' ? '16' : size === 'small' ? '18' : size === 'medium' ? '21' : '24'} />
    </span>
  {/if}
  {#if children}
    <span class="{size === 'tiny' ? 'text-xs' : size === 'small' ? 'text-sm' : size === 'medium' ? 'text-base' : 'text-lg'}">
      {@render children?.()}
    </span>
  {/if}
</button>

<style>
  button {
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    position: relative;
    padding: 0.2rem 0.5rem;
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
