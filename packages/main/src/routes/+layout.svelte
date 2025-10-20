<script lang="ts">
	import '../app.css';
	import { version } from '../../package.json';

	let { children } = $props();
</script>

<svelte:head>
	<title>Svelte Supabase Auth</title>
</svelte:head>

<div class="w-screen h-screen overflow-hidden bg-stone-50 dark:bg-stone-950 text-black dark:text-white flex flex-col items-center">
	<div class="flex-grow overflow-auto p-6 md:p-16 w-full">
		{@render children()}
	</div>
	<footer class="h-8 flex-shrink-0 flex gap-4 items-center justify-end w-full px-5 text-xs bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
		<a href="https://npmjs.com/package/svelte-supabase-auth">Svelte Supabase Auth v{version}</a>
		<div class="flex-grow"></div>
		<a href="/">login</a>
		<a href="/tests">tests</a>
		<a href="/privacy">privacy</a>
		<a href="/terms">terms</a>
	</footer>
</div>

<style lang="postcss">
  @reference "tailwindcss";

  footer a {
    @apply text-sky-400 dark:text-sky-600;
  }
</style>