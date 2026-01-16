<script lang="ts">
  import LinkButton from "$lib/elements/LinkButton.svelte";
  import type { Snippet } from "svelte";

  interface Props {
    title: string
    children: Snippet
  }

  let { title, children }: Props = $props()

  let expanded = $state(false)
</script>

<div>
  <h3>
    <LinkButton onclick={() => { expanded = !expanded }}>
      {#if expanded}
        &minus;
      {:else}
        &plus;
      {/if}
      {title}
    </LinkButton>
  </h3>
  <div class="accordion" class:hidden={!expanded}>
    <div class="spacer"></div>
    <div class="flex">
      {@render children()}
    </div>
  </div>
</div>

<style>
  div.accordion {
    display: flex;
    border-left: 2px solid var(--border);
  }
  div.spacer {
    width: var(--gap);
  }
  div.flex {
    flex: 1;
    flex-direction: column;
    transition: height 0.3s ease-in-out;
    margin: var(--gap) 0;
  }
  div.hidden {
    height:0 !important;
    overflow: hidden;
  }
</style>