<script lang="ts">
	import '../app.css';
	import '$lib/supabase-auth.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Svelte Supabase Auth</title>
</svelte:head>

<div class="w-screen h-screen overflow-auto bg-stone-50 dark:bg-stone-950 text-black dark:text-white">
	{@render children()}
</div>