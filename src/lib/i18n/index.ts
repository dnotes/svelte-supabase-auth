// Internationalization types
export interface AuthTexts {

  // Strings
  cancelButton: string
  deleteButton: string
  verifiedText: string
  unverifiedText: string
  backupText: string
  verifyCode: string
  enterCode: string
  resendEmail: string

  // Sign in
  signIn: string
  signUp: string
  emailLabel: string
  pwLabel: string
  pwConfirmLabel: string
  sendLink: string
  resetPassword: string

  // Password confirmation
  pwLength: string
  pwBreached: string
  pwUniqueness: string
  pwLengthLabel: string
  pwBreachedLabel: string
  pwUniquenessLabel: string

  // Link texts
  switchToMagicLink: string
  switchToPassword: string
  goBackToSignIn: string

  // Messages
  emailLinkSent: string
  resetPasswordSent: string
  networkError: string
  invalidCodeError: string
  authenticationError: string

  // Email verification
  linkEnterCodeHeading: string
  linkEnterCodeLabel: string

  // Account security
  accountSecurityHeading: string
  changeEmail: string
  changePassword: string
  deleteAccount: string

  // Social auth
  socialHeading: string
  socialDivider: string
  // Note: socialSignIn handles both login AND account creation via OAuth
  // Supabase's signInWithOAuth() automatically creates accounts if they don't exist
  socialSignIn: string
  socialLinking: string
  socialUnlinkIdentityConfirmation: string

  // Authenticated view
  signedIn: string
  createdTime: string
  signedInTime: string
  signedInEmail: string
  signOutButton: string

  // MFA
  mfaFactorListHeading: string
  verified: string
  unverified: string
  mfaNoFactorsText: string
  mfaWarningText: string
  mfaAddFactorLink: string
  mfaNoDeleteError: string
  mfaDeleteFactorConfirmation: string
  // MFA required
  mfaRequired: string
  // Add MFA screen
  mfaAddFactorParagraph: string
  mfaFriendlyNameLabel: string
  mfaAddFactorButton: string
  mfaScanQRCode: string
  mfaEnterSecret: string
  // MFA Challenge screen
  mfaSelectLabel: string
  mfaEnterCodeHeading: string
  mfaEnterCodeLabel: string

  // Providers
  providersListHeading: string
  noProviders: string

  // Additional UI strings
  loadingAuthMethods: string
  enterValidName: string
  enterVerificationCode: string
  emailVerifiedSuccess: string
  hideSecret: string
  showSecret: string

  // Aria labels for accessibility
  linkedAccountLabel: string
  deleteLinkedAccountLabel: string
  mfaTokenLabel: string
  deleteMfaTokenLabel: string
  qrCodeAlt: string
  totpSecretLabel: string

}

const en:AuthTexts = {

  cancelButton: 'Cancel',
  deleteButton: 'Delete',
  verifiedText: 'verified',
  unverifiedText: 'unverified',
  backupText: 'backup {count}',

  signIn: 'Sign in',
  signUp: 'Sign up',
  emailLabel: 'Email address',
  sendLink: 'Send link',
  resetPassword: 'Reset your passphrase',
  verifyCode: 'Verify code',
  enterCode: 'Enter code',
  resendEmail: 'Resend email',

  // Password confirmation
  pwLabel: 'Passphrase',
  pwConfirmLabel: 'Confirm passphrase',
  pwLength: 'Your passphrase must be at least {min} characters.',
  pwBreached: 'Your passphrase was found in at least 1 data breach. ({count})',
  pwUniqueness: 'Your passphrase should include more unique characters that are not repetitive or related to the site or your personal information.',
  pwLengthLabel: 'length check',
  pwBreachedLabel: 'breach check',
  pwUniquenessLabel: 'uniqueness check',

  // Link texts
  switchToMagicLink: 'Sign in with an email link',
  switchToPassword: 'Sign in with a passphrase',
  goBackToSignIn: 'Go back to sign in',

  // Messages
  emailLinkSent: 'Login link sent to {email}.',
  resetPasswordSent: 'Check your email for the passphrase reset link',
  networkError: 'Due to a network or server error, your login could not be completed. Please try again or reload this page. ({error})',
  invalidCodeError: 'Invalid code. Please check and try again.',
  authenticationError: 'Authentication failed. Please try again. ({error})',

  // Email verification
  linkEnterCodeHeading: 'Magic Link Verification',
  linkEnterCodeLabel: 'Click the link in the email sent to {email}, or enter the verification code below.',

  // Account security
  accountSecurityHeading: 'Account security',
  changeEmail: 'Change email',
  changePassword: 'Change passphrase',
  deleteAccount: 'Delete account',

  // Social auth
  socialHeading: 'Sign in with',
  socialDivider: 'or continue with',
  socialSignIn: 'Sign in with {provider}',
  socialLinking: 'Link {provider} account',
  socialUnlinkIdentityConfirmation: 'Are you sure you want to unlink the {provider} account for the email {email}?',

  // Authenticated view
  signedIn: 'You are signed in.',
  signedInTime: 'Last signed in: {time}',
  signedInEmail: 'Email: {email}',
  createdTime: 'Created: {time}',
  signOutButton: 'Sign out',

  // MFA
  mfaFactorListHeading: 'Multi-factor authentication (MFA) tokens',
  verified: 'verified',
  unverified: 'unverified',
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
  mfaEnterCodeHeading: 'Multi-Factor Authentication',
  mfaEnterCodeLabel: 'Enter the code from your authentication app:',
  mfaSelectLabel: 'MFA Code:',
  // MFA Warning
  mfaWarningText: 'Warning! You have only ONE multi-factor authentication token saved. '
  +'If you lose that token, it may be impossible to recover access to your account. '
  +'It is recommended to add at least one backup token to your account, and save the '
  +'provided codes in a secure location as recovery keys. To do this, take a screenshot '
  +'of the QR code or copy the secret key into a secure location.',

  // Providers
  providersListHeading: 'Linked accounts',
  noProviders: 'No linked accounts',

  // Additional UI strings
  loadingAuthMethods: 'Loading authentication methods...',
  enterValidName: 'Please enter a valid name (1-50 characters)',
  enterVerificationCode: 'Please enter the verification code',
  emailVerifiedSuccess: 'Email verified successfully!',
  hideSecret: 'Hide',
  showSecret: 'Show Secret',

  // Aria labels for accessibility
  linkedAccountLabel: 'Linked account on {provider}',
  deleteLinkedAccountLabel: 'Delete linked account for {provider} ({email})',
  mfaTokenLabel: 'Multi-factor authenticator {name}',
  deleteMfaTokenLabel: 'Delete multi-factor authenticator {name}',
  qrCodeAlt: 'QR Code for TOTP setup',
  totpSecretLabel: 'TOTP Secret',

}



// Default translations - only English included in core
export const defaultTranslations: Record<string, Partial<AuthTexts>> = {
  en
}

/**
 * Add custom translations to the library
 * @param locale - The locale code (e.g., 'de', 'pt', 'ja')
 * @param translations - Complete translation object
 */
export function addTranslations(locale: string, translations: Partial<AuthTexts>) {
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
function interpolate(template: string, params: Record<string, any>): string {
  if (!params) return template

  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return params[key] !== undefined ? String(params[key]) : match
  })
}

export type GetText = (key: keyof AuthTexts, params?: Record<string, any>) => string

export function createGetText(
  locale: string = 'en',
  texts: Partial<AuthTexts> = defaultTranslations,
  t?: (key: string, params: Record<string, any>) => string
):GetText {
  return function getText(key: string | number | symbol, params?: Record<string, any>): string {
    const keyStr = String(key)
    let result: string

    // Priority 1: User-provided t() function (existing i18n)
    if (t) {
      try {
        result = t(`auth.${keyStr}`, params??{})
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
      return interpolate(result, params??{})
    }

    // Priority 3: Built-in translations based on locale
    if (defaultTranslations[locale] && defaultTranslations[locale][keyStr as keyof AuthTexts]) {
      result = defaultTranslations[locale][keyStr as keyof AuthTexts]!
      return interpolate(result, params??{})
    }

    // Priority 3.5: Language fallback - try base language code (first 2 characters)
    const baseLanguage = locale.substring(0, 2)
    if (baseLanguage !== locale && defaultTranslations[baseLanguage] && defaultTranslations[baseLanguage][keyStr as keyof AuthTexts]) {
      result = defaultTranslations[baseLanguage][keyStr as keyof AuthTexts]!
      return interpolate(result, params??{})
    }

    // Priority 4: Fallback to English
    if (defaultTranslations.en[keyStr as keyof AuthTexts]) {
      result = defaultTranslations.en[keyStr as keyof AuthTexts]!
      return interpolate(result, params??{})
    }

    // Ultimate fallback: return the key itself
    return keyStr
  }
}
