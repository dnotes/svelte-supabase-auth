---
"svelte-supabase-auth": minor
---

- removed authOptions.passwordPolicy.goodLength, as it was unused
- moved authOptions.ignoreBestPractices to authOptions.passwordPolicy.ignoreLengthRecommendations