---
"svelte-supabase-auth": minor
---

fix: Standardize on userInfo snippet, eliminating loggedInAs.

BREAKING CHANGE: If you used a `signedInAs` snippet, you'll need to replace it with `userInfo`; 
if you used `userInfo`, you may wish to add the basic info displayed in AuthenticatedView.svelte.
