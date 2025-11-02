# svelte-supabase-auth

## 1.0.0

### Major Changes

- def4d65: 1.0 release

## 0.5.5

### Patch Changes

- 34360dc: fix supabase client type definition to accept any schema

## 0.5.4

### Patch Changes

- 5fd2964: Switched to adapter-static because worker is unnecessary

## 0.5.3

### Patch Changes

- 02e459b: (site) fix imports for cloudflare deploy

## 0.5.2

### Patch Changes

- 2c6c129: (site) Try again to make the web component examples available.

## 0.5.1

### Patch Changes

- a431fbc: Handle various configurations where email auth is disabled

  - `auth = false`
  - `auth.enabled = false`
  - `auth.email = false`
  - `auth.email.enabled = false`
  - `auth.email.enable_signup = false`

- be60303: Fix handling of sign up when email confirmation is not required
- e5e66ac: Update translations for show/hide passphrase
- e4c6883: (site) added links to static HTML pages using the supabase-auth custom element
- 22a28a8: (site) update the list of tests

## 0.5.0

### Minor Changes

- 829ec96: removed demo site deployment, in favor of having Cloudflare watch the changelog for deployments.
- 2baf28f: Updated publish workflow to push changes to demo-site branch
- b7f6c3a: Moved web component and testing to main package

### Patch Changes

- fafea5b: Fixed some CSS affecting the web component
- 17df1a4: Updating website
- 9df8f93: fixed page spacing on demo site

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
