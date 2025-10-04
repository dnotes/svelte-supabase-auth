/**
 * Web Component Export for Supabase Auth
 *
 * This file provides a simple way to use the Supabase Auth component as a web component
 * in any HTML page or framework.
 */

import AuthCustomElement from './AuthCustomElement.svelte'

// The custom element is automatically registered when this module is imported
// The tag name is 'supabase-auth' as defined in the component

// Export the component for manual registration if needed
export { AuthCustomElement }

// Export types for TypeScript users
export type { AuthCustomElementProps } from './AuthCustomElement.svelte'

// Re-export Supabase types for convenience
export type { SupabaseClient, Provider, User } from '@supabase/supabase-js'
export type { AuthTexts } from './i18n'
export type { PartialSupabaseAuthOptions, SupabaseAuthOptions } from './options'
export type { SignInView } from './stores.svelte'

/**
 * Utility function to create a Supabase client
 * Useful for users who want to create their own client instance
 */
export { createClient } from '@supabase/supabase-js'

/**
 * Example usage:
 *
 * 1. Import this module in your application:
 *    import 'svelte-supabase-auth/web-component'
 *
 * 2. Use the custom element in your HTML:
 *    <supabase-auth
 *      supabase-url="https://your-project.supabase.co"
 *      supabase-anon-key="your-anon-key"
 *      providers='["google", "github"]'
 *      social-layout="vertical"
 *      locale="en"
 *    ></supabase-auth>
 *
 * 3. Access the user state via JavaScript:
 *    const authElement = document.querySelector('supabase-auth')
 *    console.log(authElement.user) // Current user or null
 */

