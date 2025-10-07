# svelte-supabase-auth

## 0.4.0

### Minor Changes

- 7c52796: Added a web component

### Patch Changes

- f3a01ee: Fixed web component loading for UMD and ESM

  - added tests for UMD loading with configuration, loaded as a file:// in browser and over html
  - added tests for ESM loading with injected client, loaded over html

## 0.3.0

### Minor Changes

- 39e59eb: Updated build process
- 41fcc7c: include all icons as svg

## 0.2.0

### Minor Changes

- 907345f: Update important information in README and package.json

## 0.1.0

### Minor Changes

- da34ef4: changesets release
- 5c6149f: - removed authOptions.passwordPolicy.goodLength, as it was unused
  - moved authOptions.ignoreBestPractices to authOptions.passwordPolicy.ignoreLengthRecommendations
- 41f17ec: All English strings have been translated by AI
  into Arabic, Chinese, French and Spanish.

### Patch Changes

- 3df5c14: Standardize the "Enter code" field
- caef99a: fix the env vars for automated test ci runs
