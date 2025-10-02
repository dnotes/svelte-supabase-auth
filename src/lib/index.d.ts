import type { Component } from 'svelte'
import type { AuthTexts } from './i18n'
import type { AuthProps } from './Auth.svelte'
import type { Provider } from '@supabase/supabase-js'

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

// Re-export types
export type { AuthTexts, AuthProps }

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

// View exports
export declare const AuthenticatedView: Component<any>
