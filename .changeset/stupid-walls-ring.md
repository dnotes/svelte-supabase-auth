---
"test-web-component": patch
"svelte-supabase-auth": patch
---

Fixed web component loading for UMD and ESM

- added tests for UMD loading with configuration, loaded as a file:// in browser and over html
- added tests for ESM loading with injected client, loaded over html
