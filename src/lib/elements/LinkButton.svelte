<script lang="ts">
  interface Props {
    block?: boolean
    class?: string
    children: ()=>any
    onclick?: () => void
  }

  let { block, class:classText, onclick, children }: Props = $props()
</script>

<button class:block class="{classText}" type="button" onclick={(e) => { e.preventDefault(); onclick?.(); }}>{@render children()}</button>

<style>
  button {
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
</style>
