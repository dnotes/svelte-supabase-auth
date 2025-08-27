// Internationalization types
export interface AuthTexts {

  // Strings
  cancelButton?: string
  deleteButton?: string
  verifiedText?: string
  unverifiedText?: string
  backupText?: string

  // Sign in
  signIn?: string
  signUp?: string
  emailLabel?: string
  passwordLabel?: string
  sendLink?: string
  resetPassword?: string

  // Link texts
  switchToSignUp?: string
  switchToSignIn?: string
  switchToMagicLink?: string
  switchToPassword?: string
  goBackToSignIn?: string

  // Messages
  magicLinkSent?: string
  resetPasswordSent?: string
  networkError?: string
  invalidCodeError?: string
  authenticationError?: string

  // Social auth
  socialHeading?: string
  socialDivider?: string
  // Note: socialSignIn handles both login AND account creation via OAuth
  // Supabase's signInWithOAuth() automatically creates accounts if they don't exist
  socialSignIn?: string

  // Authenticated view
  loggedIn?: string
  loggedInTime?: string
  loggedInEmail?: string
  signOutButton?: string

  // MFA
  mfaFactorListHeading?: string
  mfaListItemText?: string
  mfaNoFactorsText?: string
  mfaWarningText?: string
  mfaAddFactorLink?: string
  mfaNoDeleteError?: string
  mfaDeleteFactorConfirmation?: string
  // MFA required
  mfaRequired?: string
  // Add MFA screen
  mfaAddFactorParagraph?: string
  mfaFriendlyNameLabel?: string
  mfaAddFactorButton?: string
  mfaScanQRCode?: string
  mfaEnterSecret?: string
  // MFA Challenge screen
  mfaEnterCodeLabel?: string
  mfaVerifyCodeButton?: string

}



// Default translations - only English included in core
export const defaultTranslations: Record<string, AuthTexts> = {
  en: {

    cancelButton: 'Cancel',
    deleteButton: 'Delete',
    verifiedText: 'verified',
    unverifiedText: 'unverified',
    backupText: 'backup #{count}',

    signIn: 'Sign in',
    emailLabel: 'Email address',
    passwordLabel: 'Password',
    sendLink: 'Send link',
    resetPassword: 'Reset your password',

    // Link texts
    switchToSignUp: "Don't have an account? Sign up",
    switchToSignIn: 'Do you have an account? Sign in',
    switchToMagicLink: 'Sign in with an email link',
    switchToPassword: 'Sign in with a password',
    goBackToSignIn: 'Go back to sign in',

    // Messages
    magicLinkSent: 'Check your email for the login link',
    resetPasswordSent: 'Check your email for the password reset link',
    networkError: 'Due to a network or server error, your login could not be completed. Please try again or reload this page. ({error})',
    invalidCodeError: 'Invalid code. Please check and try again.',
    authenticationError: 'Authentication failed. Please try again. ({error})',

    // Social auth
    socialHeading: 'Sign in with',
    socialDivider: 'or continue with',
    socialSignIn: 'Sign in with {provider}',

    // Authenticated view
    loggedIn: 'You are logged in.',
    loggedInTime: 'Last login: {time}',
    loggedInEmail: 'Email: {email}',
    signOutButton: 'Sign out',

    // MFA
    mfaFactorListHeading: 'Multi-factor authentication (MFA) tokens',
    mfaListItemText: '{name} created {date} ({status})',
    mfaNoFactorsText: 'No MFA tokens',
    mfaAddFactorLink: 'add a new MFA token',
    mfaNoDeleteError: 'You cannot delete the last authentication method when MFA is required.',
    mfaDeleteFactorConfirmation: 'Are you sure you want to delete the {name} multi-factor authentication token?',
    // MFA required
    mfaRequired: 'Multi-factor authentication is required for your account. Please set up a token to continue.',
    // Add MFA
    mfaAddFactorParagraph: 'Add a multi-factor authentication token to your account.',
    mfaFriendlyNameLabel: 'Name (for you to identify this token)',
    mfaAddFactorButton: 'Generate new token',
    mfaScanQRCode: 'Scan the QR code below in your authentication app:',
    mfaEnterSecret: 'Or enter the following secret manually:',
    // MFA Challenge
    mfaEnterCodeLabel: 'Enter the code from your authentication app:',
    mfaVerifyCodeButton: 'Verify code',
    // MFA Warning
    mfaWarningText: 'Warning! You have only ONE multi-factor authentication token saved. '
    +'If you lose that token, it may be impossible to recover access to your account. '
    +'It is recommended to add at least one backup token to your account, and save the '
    +'provided codes in a secure location as recovery keys. To do this, take a screenshot '
    +'of the QR code or copy the secret key into a secure location.',

  }
}

/**
 * Add custom translations to the library
 * @param locale - The locale code (e.g., 'de', 'pt', 'ja')
 * @param translations - Complete translation object
 */
export function addTranslations(locale: string, translations: AuthTexts) {
  defaultTranslations[locale] = translations
}

/**
 * Text resolution function with priority hierarchy:
 * 1. User-provided t() function (existing i18n)
 * 2. User text overrides
 * 3. Built-in translations based on locale
 * 4. Fallback to English
 */
/**
 * Simple interpolation function that replaces {key} placeholders with values
 * @param template - String template with {key} placeholders
 * @param params - Object with values to substitute
 */
function interpolate(template: string, params?: Record<string, any>): string {
  if (!params) return template

  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return params[key] !== undefined ? String(params[key]) : match
  })
}

export type GetText = (key: string | number | symbol, params?: Record<string, any>) => string

export function createGetText(
  locale: string = 'en',
  texts?: Partial<AuthTexts>,
  t?: (key: string, params?: Record<string, any>) => string
):GetText {
  return function getText(key: string | number | symbol, params?: Record<string, any>): string {
    const keyStr = String(key)
    let result: string

    // Priority 1: User-provided t() function (existing i18n)
    if (t) {
      try {
        result = t(`auth.${keyStr}`, params)
        // Only use if it's not the same as the key (indicates translation found)
        if (result !== `auth.${keyStr}`) {
          return result // External i18n handles its own interpolation
        }
      } catch (error) {
        // Continue to next priority if t() fails
      }
    }

    // Priority 2: User text overrides
    if (texts && texts[keyStr as keyof AuthTexts]) {
      result = texts[keyStr as keyof AuthTexts]!
      return interpolate(result, params)
    }

    // Priority 3: Built-in translations based on locale
    if (defaultTranslations[locale] && defaultTranslations[locale][keyStr as keyof AuthTexts]) {
      result = defaultTranslations[locale][keyStr as keyof AuthTexts]!
      return interpolate(result, params)
    }

    // Priority 3.5: Language fallback - try base language code (first 2 characters)
    const baseLanguage = locale.substring(0, 2)
    if (baseLanguage !== locale && defaultTranslations[baseLanguage] && defaultTranslations[baseLanguage][keyStr as keyof AuthTexts]) {
      result = defaultTranslations[baseLanguage][keyStr as keyof AuthTexts]!
      return interpolate(result, params)
    }

    // Priority 4: Fallback to English
    if (defaultTranslations.en[keyStr as keyof AuthTexts]) {
      result = defaultTranslations.en[keyStr as keyof AuthTexts]!
      return interpolate(result, params)
    }

    // Ultimate fallback: return the key itself
    return keyStr
  }
}
