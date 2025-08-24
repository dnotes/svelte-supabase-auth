// Main components
export { default as Auth, type AuthProps } from './Auth.svelte'
export { default as Button } from './Button.svelte'
export { default as Icon } from './Icon.svelte'
export { default as Input } from './Input.svelte'
export { default as LinkButton } from './LinkButton.svelte'
export { default as Text } from './Text.svelte'

// Internationalization - re-export for easy access
export { defaultTranslations, createGetText, type AuthTexts } from './i18n.js'

// Views
export { default as AuthenticatedView } from './views/AuthenticatedView.svelte'
export { default as EmailAuthView } from './views/EmailAuthView.svelte'
export { default as ForgottenPasswordView } from './views/ForgottenPasswordView.svelte'
export { default as MagicLinkView } from './views/MagicLinkView.svelte'
export { default as SocialAuthView } from './views/SocialAuthView.svelte'

// Social icons
export { default as AzureIcon } from './social-icons/AzureIcon.svelte'
export { default as BitbucketIcon } from './social-icons/BitbucketIcon.svelte'
export { default as DiscordIcon } from './social-icons/DiscordIcon.svelte'
export { default as FacebookIcon } from './social-icons/FacebookIcon.svelte'
export { default as GithubIcon } from './social-icons/GithubIcon.svelte'
export { default as GitlabIcon } from './social-icons/GitlabIcon.svelte'
export { default as GoogleIcon } from './social-icons/GoogleIcon.svelte'
export { default as TwitterIcon } from './social-icons/TwitterIcon.svelte'