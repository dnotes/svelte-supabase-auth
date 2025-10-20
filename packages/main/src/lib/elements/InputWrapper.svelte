<script module lang="ts">
  import type { Snippet } from "svelte";

  export interface InputWrapperProps {
    name: string
    label: string
    icon?: Provider | OtherIcon | null
    children: Snippet<[]>
    links?: Snippet<[]>
  }
</script>

<script lang="ts">
  import Icon from "./Icon.svelte";
  import type { Provider } from "@supabase/supabase-js";
  import type { OtherIcon } from "./iconData";
  let { name, label, icon, children, links }: InputWrapperProps = $props()
</script>

<div class="sA-field">
  <label>
    <span>{label}</span>

    <span class="input">
      {#if icon}
        <span class="icon">
          <Icon name={icon} size="21" />
        </span>
      {/if}

      {@render children()}

    </span>
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
    z-index: 1;
  }
  .input {
    position: relative;
    display: flex;
  }
</style>
