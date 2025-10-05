# Web Component Test Package

This package provides a simple HTML page for testing the Supabase Auth web component that can be opened directly in a browser without any development server.

## Setup

1. Build the web component from the main package:
   ```bash
   cd ../main
   npm run build:web-component
   ```

2. Copy the built files to this test package:
   ```bash
   npm run build
   ```

3. Open `index.html` directly in your browser:
   - Double-click the `index.html` file, or
   - Right-click and "Open with" your preferred browser, or
   - Use `file://` protocol in your browser's address bar

**Note**: The page loads the Supabase client library from a CDN, so you'll need an internet connection for the web component to work properly.

## Configuration

Before testing, you need to:

1. Set up a Supabase project
2. Get your project URL and anon key from the Supabase dashboard
3. Enter these values in the configuration section on the test page

## Features Tested

- Basic authentication with email/password
- Social authentication (Google, GitHub, Discord)
- Different layouts (vertical/horizontal)
- Custom authentication options
- User state monitoring
- Error handling

## Usage

The test page demonstrates two different configurations:

1. **Basic Auth Component**: Simple setup with vertical layout
2. **Advanced Auth Component**: Custom options with horizontal layout

You can interact with the components and monitor the user state through the provided buttons and console logs.

## Web Component API

The `<supabase-auth>` custom element accepts the following attributes:

- `supabase-url`: Your Supabase project URL (required)
- `supabase-anon-key`: Your Supabase anon key (required)
- `providers`: JSON array of social providers (e.g., `["google", "github"]`)
- `social-layout`: Layout for social buttons (`"vertical"` or `"horizontal"`)
- `social-button-size`: Size of social buttons (`"tiny"`, `"small"`, `"medium"`, `"large"`)
- `initial-view`: Initial view to show (`"sign_in"`, `"sign_in_with_password"`, `"forgotten_password"`)
- `locale`: Language locale (e.g., `"en"`, `"es"`, `"fr"`)
- `auth-options`: JSON object with authentication options
- `texts`: JSON object with custom text translations

## JavaScript API

The web component exposes a `user` property that contains the current user state:

```javascript
const authElement = document.querySelector('supabase-auth');
console.log(authElement.user); // Current user or null
```
