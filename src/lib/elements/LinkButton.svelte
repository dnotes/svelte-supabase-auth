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

    cursor: pointer;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(62, 207, 142);
  }
</style>
