<script lang="ts">
  import Auth from '$lib/Auth.svelte'
  import type { Session, User } from '@supabase/supabase-js';
  import { supabaseClient } from './supabase.js'
</script>

<div class="mx-auto mt-6 md:mt-48 w-120 max-w-full p-5">
  <Auth {supabaseClient} />
</div>