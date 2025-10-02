<script lang="ts">
  import type { GetText } from '$lib/i18n/index.js';
  import { autofocus } from '../utils/autofocus.svelte.js'

  interface Props {
    value?: string
    name?: string
    disabled?: boolean
    getText: GetText
    [key:string]: any
  }

  let {
    value = $bindable(''),
    getText,
    class:className = '',
    name = 'verification-code',
    ...rest
  }: Props = $props()

</script>

<input
  type="text"
  class="{className}"
  {name}
  aria-label={getText('enterCode')}
  bind:value
  placeholder="000000"
  inputmode="numeric"
  title="{getText('enterCodeTitle')}"
  required
  use:autofocus
  {...rest}
/>
