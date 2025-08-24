// Internationalization types
export interface AuthTexts {
  signIn?: string
  signUp?: string
  emailLabel?: string
  phoneLabel?: string
  passwordLabel?: string
  emailPlaceholder?: string
  passwordPlaceholder?: string
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

  // Social auth
  socialSignInHeading?: string
  socialSignUpHeading?: string
  socialDivider?: string
  socialSignInWith?: string
  socialSignUpWith?: string

  // Authenticated view
  lastLogin?: string
  loggedIn?: string
  signOutButton?: string
}



// Default translations - only English included in core
export const defaultTranslations: Record<string, AuthTexts> = {
  en: {
    signIn: 'Sign in',
    signUp: 'Sign up',
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

    // Social auth
    socialSignInHeading: 'Sign in with',
    socialSignUpHeading: 'Sign up with',
    socialDivider: 'or continue with',
    socialSignInWith: 'Sign in with {provider}',
    socialSignUpWith: 'Sign up with {provider}',

    // Authenticated view
    loggedIn: 'You are logged in.',
    lastLogin: 'Last login',
    signOutButton: 'Sign out',
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
export function createGetText(
  locale: string = 'en',
  texts?: Partial<AuthTexts>,
  t?: (key: string, params?: Record<string, any>) => string
) {
  return function getText(key: string | number | symbol, params?: Record<string, any>): string {
    const keyStr = String(key)

    // Priority 1: User-provided t() function (existing i18n)
    if (t) {
      try {
        const result = t(`auth.${keyStr}`, params)
        // Only use if it's not the same as the key (indicates translation found)
        if (result !== `auth.${keyStr}`) {
          return result
        }
      } catch (error) {
        // Continue to next priority if t() fails
      }
    }

    // Priority 2: User text overrides
    if (texts && texts[keyStr as keyof AuthTexts]) {
      return texts[keyStr as keyof AuthTexts]!
    }

            // Priority 3: Built-in translations based on locale
    if (defaultTranslations[locale] && defaultTranslations[locale][keyStr as keyof AuthTexts]) {
      return defaultTranslations[locale][keyStr as keyof AuthTexts]!
    }

    // Priority 3.5: Language fallback - try base language code (first 2 characters)
    const baseLanguage = locale.substring(0, 2)
    if (baseLanguage !== locale && defaultTranslations[baseLanguage] && defaultTranslations[baseLanguage][keyStr as keyof AuthTexts]) {
      return defaultTranslations[baseLanguage][keyStr as keyof AuthTexts]!
    }

    // Priority 4: Fallback to English
    if (defaultTranslations.en[keyStr as keyof AuthTexts]) {
      return defaultTranslations.en[keyStr as keyof AuthTexts]!
    }

    // Ultimate fallback: return the key itself
    return keyStr
  }
}
