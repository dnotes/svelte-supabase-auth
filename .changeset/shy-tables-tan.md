---
"svelte-supabase-auth": minor
---

feat: Add bindable "activeView" prop and "active-view" html attribute for custom element,
so that consumers can tell which view is active and potentially add their own HTML
depending on the active view. For example, to add a profile form for authenticated users,
you could observe the "active-view" html attribute and implement your own code that is
visible when the active view is "authenticated", or in a Svelte context, bind to activeView 
with `<Auth bind:activeView ... />`
