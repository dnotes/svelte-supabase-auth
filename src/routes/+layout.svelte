<script lang="ts">
	import '../app.css';
	import '$lib/supabase-auth.css';

	let { children } = $props();
</script>

{@render children()}
