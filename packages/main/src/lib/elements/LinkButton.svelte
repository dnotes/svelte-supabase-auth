<script lang="ts">
  interface Props {
    block?: boolean
    large?: boolean
    class?: string
    children: ()=>any
    onclick?: () => void
    [key: string]: any
  }

  let { block, large, class:classText, onclick, children, ...rest }: Props = $props()
</script>

<button role="link" class:block class:large class="{classText}" type="button" onclick={(e) => { e.preventDefault(); onclick?.(); }} {...rest}>{@render children()}</button>

<style>
  button[role="link"] {
    text-align: match-parent;
    border: none;
    background: none;
    color: var(--link-color);
    font-size: 80%;
  }
  button.block {
    width: 100%;
    text-align: center;
  }
  button.large {
    font-size: 160%;
    line-height: 1.1em;
  }
</style>
