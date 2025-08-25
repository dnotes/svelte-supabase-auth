<script lang="ts">
  interface Props {
    children: ()=>any
    onclick?: () => void
  }

  let { onclick, children }: Props = $props()
</script>

<button onclick={(e) => { e.preventDefault(); onclick?.(); }}>{@render children()}</button>

<style>
  button {
    border: none;
    background: none;
  }
</style>
