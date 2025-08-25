<script lang="ts">
  import Icon from './Icon.svelte'

  interface Props {
    name: string
    label: string
    placeholder?: string
    value?: string
    icon?: string | null
    type?: 'text' | 'email' | 'password'
  }

  let { name, label, placeholder = '', value = $bindable(), icon = null, type = 'text' }: Props = $props()
</script>

<label for={name}>
  {label}

  <div class="input">
    {#if icon}
      <span class="icon">
        <Icon name={icon} size="21" />
      </span>
    {/if}

    {#if type == 'text'}
      <input type="text" {name} {placeholder} bind:value>
    {:else if type == 'email'}
      <input type="email" {name} {placeholder} bind:value>
    {:else if type == 'password'}
      <input type="password" {name} {placeholder} autocomplete="on" bind:value>
    {/if}
  </div>
</label>

<style>
  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 1rem;
  }
  input {
    display: block;
    flex: 1;
    padding: 5px 3px 8px 35px;
  }
  .icon {
    position: absolute;
    margin: 7px;
  }
  .input {
    position: relative;
    display: flex;
  }
</style>
