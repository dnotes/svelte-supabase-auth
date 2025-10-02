// Main components
export { default as Auth, type AuthProps } from './Auth.svelte'
export { default as Button } from './elements/Button.svelte'
export { default as Icon } from './elements/Icon.svelte'
export { default as InputWrapper } from './elements/InputWrapper.svelte'
export { default as LinkButton } from './elements/LinkButton.svelte'

// Internationalization - re-export for easy access
export { defaultTranslations, createGetText, addTranslations, type AuthTexts } from './i18n'

// Views
export { default as AuthenticatedView } from './views/AuthenticatedView.svelte'
export { default as EmailAuthView } from './views/EmailAuthView.svelte'
export { default as ForgottenPasswordView } from './views/ForgottenPasswordView.svelte'
export { default as MFAChallengeView } from './views/MFAChallengeView.svelte'
export { default as AddMFAView } from './views/AddMFAView.svelte'
export { default as SocialAuthView } from './views/SocialAuthView.svelte'
