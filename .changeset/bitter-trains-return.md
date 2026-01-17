---
"svelte-supabase-auth": minor
---

Feat: Better flow for password resets; The new flow guides users to login with another method
and then change their password through the account security settings.

BREAKING CHANGE: The string for 'resetPasswordSent' has been removed, and replaced with a string
for 'resetPasswordLabel', which will need to be handled by translations.
