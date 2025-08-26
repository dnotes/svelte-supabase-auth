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

  // MFA Challenge
  mfaChallenge?: string
  mfaChallengeDescription?: string
  totpCode?: string
  verifyCode?: string

  // MFA Enrollment/Management
  mfaEnrollment?: string
  enrollMFA?: string
  totpSetup?: string
  totpSetupDescription?: string
  scanQRCode?: string
  enterSecret?: string
  verifySetup?: string
  mfaFactors?: string
  noFactorsEnrolled?: string
  factorName?: string
  factorType?: string
  factorStatus?: string
  enrollNewFactor?: string
  unenrollFactor?: string
  confirmUnenroll?: string
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
    socialHeading: 'Sign in with',
    socialDivider: 'or continue with',
    socialSignIn: 'Sign in with {provider}',

    // Authenticated view
    loggedIn: 'You are logged in.',
    loggedInTime: 'Last login: {time}',
    loggedInEmail: 'Email: {email}',
    signOutButton: 'Sign out',

    // MFA Challenge
    mfaChallenge: 'Multi-Factor Authentication',
    mfaChallengeDescription: 'Enter the verification code from your authenticator app',
    totpCode: 'Verification code',
    verifyCode: 'Verify',

    // MFA Enrollment/Management
    mfaEnrollment: 'Two-Factor Authentication',
    enrollMFA: 'Set up MFA',
    totpSetup: 'Set up Authenticator App',
    totpSetupDescription: 'Scan the QR code with your authenticator app, then enter the verification code below',
    scanQRCode: 'Scan this QR code with your authenticator app',
    enterSecret: 'Or enter this secret manually: {secret}',
    verifySetup: 'Verify Setup',
    mfaFactors: 'Your authentication methods',
    noFactorsEnrolled: 'No authentication methods set up',
    factorName: 'Factor Name',
    factorType: 'Type',
    factorStatus: 'Status',
    enrollNewFactor: 'Add new factor',
    unenrollFactor: 'Remove',
    confirmUnenroll: 'Are you sure you want to remove this authentication method?',
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
