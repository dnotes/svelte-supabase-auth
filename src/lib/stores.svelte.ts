import { writable, type Writable } from "svelte/store";
import type { User } from "@supabase/supabase-js";
import type { SupabaseAuthOptions } from "./options";

// The current user from Supabase
export const user:Writable<User|null> = writable(null)

// Whether the user needs to complete an MFA challenge
export const needsMFAChallenge:Writable<false|'toLogin'|'toElevate'> = writable(false)

// Whether the user has sent an email link to sign in
export type EmailLinkSent = {
  email: string
  sentAt: Date
  expiresAt: Date
}
export const emailLinkSent:Writable<EmailLinkSent|null> = writable(null)

// The Supabase auth options across all components
export const saOptions:Writable<SupabaseAuthOptions> = writable()

// The current sign in view
export type SignInView = 'sign_in' | 'sign_in_with_password' | 'forgotten_password'
export const signInView:Writable<SignInView> = writable('sign_in_with_password')

// The email address saved across form components for signing in or signing up
export const email:Writable<string> = writable('')

export type SocialSettings = {
  socialLayout: 'vertical' | 'horizontal'
  socialButtonSize: 'tiny' | 'small' | 'medium' | 'large'
}

// Social settings
export const socialSettings:Writable<SocialSettings> = writable({
  socialLayout: 'vertical',
  socialButtonSize: 'medium',
})