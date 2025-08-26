<script module lang="ts">
  import type { Snippet } from "svelte";

  export interface InputWrapperProps {
    name: string
    label: string
    icon?: string | null
    children: Snippet<[]>
    links?: Snippet<[]>
  }
</script>

<script lang="ts">
  import Icon from "./Icon.svelte";
  let { name, label, icon, children, links }: InputWrapperProps = $props()
</script>

<div class="sA-field">
  <label for={name}>
    <span>{label}</span>

    <div class="input">
      {#if icon}
        <span class="icon">
          <Icon name={icon} size="21" />
        </span>
      {/if}

      {@render children()}

    </div>
  </label>
  {#if links}
    <div class="links flex">
      {@render links?.()}
    </div>
  {/if}
</div>

<style>
  label {
    display: block;
  }
  label>span {
    display: block;
    padding: 2px;
  }
  .icon {
    position: absolute;
    left: 0;
    margin: 6px;
  }
  .input {
    position: relative;
  }
</style>
