import type { Component } from 'svelte'
import type { SupabaseClient } from '@supabase/supabase-js'

// Auth component props
export interface AuthProps {
  supabaseClient: SupabaseClient
  class?: string
  style?: string
  socialLayout?: 'vertical' | 'horizontal'
  socialColors?: boolean
  socialButtonSize?: 'tiny' | 'small' | 'medium' | 'large'
  providers?: string[]
  view?: 'sign_in' | 'sign_up' | 'magic_link' | 'forgotten_password'
}

// Button component props
export interface ButtonProps {
  block?: boolean
  primary?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large'
  loading?: boolean
  icon?: string | null
  style?: Record<string, string>
  onclick?: () => void
}

// Input component props
export interface InputProps {
  name: string
  label: string
  placeholder?: string
  value: string
  icon?: string | null
  type?: 'text' | 'email' | 'password'
}

// Text component props
export interface TextProps {
  type?: string
}

// Icon component props
export interface IconProps {
  name: string
  size?: string
}

// Social icon props
export interface SocialIconProps {
  size?: string
}

// Component exports
export declare const Auth: Component<AuthProps>
export declare const Button: Component<ButtonProps>
export declare const EmailAuthView: Component<any>
export declare const ForgottenPasswordView: Component<any>
export declare const Icon: Component<IconProps>
export declare const Input: Component<InputProps>
export declare const LinkButton: Component<any>
export declare const MagicLinkView: Component<any>
export declare const SocialAuthView: Component<any>
export declare const Text: Component<TextProps>

// View exports
export declare const AuthenticatedView: Component<any>

// Social icon exports
export declare const AzureIcon: Component<SocialIconProps>
export declare const BitbucketIcon: Component<SocialIconProps>
export declare const DiscordIcon: Component<SocialIconProps>
export declare const FacebookIcon: Component<SocialIconProps>
export declare const GithubIcon: Component<SocialIconProps>
export declare const GitlabIcon: Component<SocialIconProps>
export declare const GoogleIcon: Component<SocialIconProps>
export declare const TwitterIcon: Component<SocialIconProps>