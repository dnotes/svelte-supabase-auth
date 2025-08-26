<script module lang="ts">
  import type { Snippet } from "svelte";

  export interface InputWrapperProps {
    name: string
    label: string
    icon?: string | null
    children: Snippet<[]>
  }
</script>

<script lang="ts">
  import Icon from "./Icon.svelte";
  let { name, label, icon, children }: InputWrapperProps = $props()
</script>

<div class="supabase-auth-field">
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
</div>

<style>
  .supabase-auth-field {
    margin-bottom: 5px;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
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
    display: flex;
  }
</style>
