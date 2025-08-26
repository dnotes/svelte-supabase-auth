<script lang="ts">
  interface Props {
    children: ()=>any
    onclick?: () => void
  }

  let { onclick, children }: Props = $props()
</script>

<button type="button" onclick={(e) => { e.preventDefault(); onclick?.(); }}>{@render children()}</button>

<style>
  button {
    border: none;
    background: none;
    color: var(--link-color);
  }
</style>
