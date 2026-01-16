<script lang="ts">
  import { iconData, type IconData } from './iconData.js';
  interface Props {
    name: keyof IconData
    size?: string
  }

  let { name, size = "10" }: Props = $props()

</script>

{#if iconData[name]}
  <svg
    width={size}
    height={size}
    role="presentation"
    viewBox={(iconData as any)[name]?.viewbox ?? '0 0 24 24'}
    xmlns="http://www.w3.org/2000/svg"
  >
    {@html (iconData as any)[name]?.body ?? iconData[name]}
  </svg>
{/if}
