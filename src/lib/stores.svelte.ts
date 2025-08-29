import { writable, type Writable } from "svelte/store";
import type { User } from "@supabase/supabase-js";
import type { SupabaseAuthOptions } from "./options";

export const user:Writable<User|null> = writable(null)

export const needsMFAChallenge:Writable<false|'toLogin'|'toElevate'> = writable(false)

export type EmailLinkSent = {
  email: string
  sentAt: Date
  expiresAt: Date
}
export const emailLinkSent:Writable<EmailLinkSent|null> = writable(null)

export const saOptions:Writable<SupabaseAuthOptions> = writable()

export type SignInView = 'sign_in' | 'sign_in_with_password' | 'forgotten_password'
export const signInView:Writable<SignInView> = writable('sign_in')