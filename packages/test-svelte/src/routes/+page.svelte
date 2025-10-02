<script lang="ts">
  import { Auth } from 'svelte-supabase-auth'
  import { supabaseClient } from './supabase';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Auth {supabaseClient} />