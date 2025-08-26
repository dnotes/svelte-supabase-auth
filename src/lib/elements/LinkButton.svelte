<script lang="ts">
  interface Props {
    small?: boolean
    block?: boolean
    class?: string
    children: ()=>any
    onclick?: () => void
  }

  let { small, block, class:classText, onclick, children }: Props = $props()
</script>

<button class:small class:block class="{classText}" type="button" onclick={(e) => { e.preventDefault(); onclick?.(); }}>{@render children()}</button>

<style>
  button {
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
