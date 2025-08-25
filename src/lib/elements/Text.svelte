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
  .danger {
    color: rgba(245, 101, 101)
  }
</style>
