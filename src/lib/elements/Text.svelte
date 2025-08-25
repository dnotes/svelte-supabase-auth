<script lang="ts">
  interface Props {
    type?: string
  }

  let { type = '' }: Props = $props()
</script>

<span class:danger={type=='danger'}>
  <slot/>
</span>

<style>
  /* Layout-only styles - no visual styling */
</style>
