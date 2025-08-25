<script lang="ts">
  import Icon from './Icon.svelte'

  interface Props {
    block?: boolean
    primary?: boolean
    shadow?: boolean
    size?: 'tiny' | 'small' | 'medium' | 'large'
    loading?: boolean
    icon?: string | null
    style?: Record<string, string>
    onclick?: () => void
  }

  let {
    block = false,
    primary = false,
    shadow = false,
    size = 'tiny',
    loading = false,
    icon = null,
    style = {},
    onclick
  }: Props = $props()

  const styleString = $derived(Object.entries(style).map(([key, value]) => {
    return `${key}: ${value}`
  }).join(';'))
</script>

<button class:block class={size} class:primary style={styleString} onclick={onclick} disabled={loading}>
  {#if icon}
    <span class="icon">
      <Icon name={icon} size=21/>
    </span>
  {/if}
  <span><slot/></span>
</button>

<style>
  button {
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    position: relative;
  }

  .icon {
    display: flex;
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
