// Internationalization types
export interface AuthTexts {
  signIn?: string
  signUp?: string
  emailLabel?: string
  passwordLabel?: string
  emailPlaceholder?: string
  passwordPlaceholder?: string
  signInButton?: string
  signUpButton?: string
  magicLinkButton?: string
  resetPasswordButton?: string

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
  loggedInSince?: string
  loggedIn?: string
  signOutButton?: string
}



// Default translations
export const defaultTranslations: Record<string, AuthTexts> = {
  en: {
    signIn: 'Sign in',
    signUp: 'Sign up',
    emailLabel: 'Email address',
    passwordLabel: 'Password',
    emailPlaceholder: 'Your email address',
    passwordPlaceholder: 'Your password',
    signInButton: 'Sign in',
    signUpButton: 'Sign up',
    magicLinkButton: 'Send magic link',
    resetPasswordButton: 'Send reset password instructions',

    // Link texts
    switchToSignUp: "Don't have an account? Sign up",
    switchToSignIn: 'Do you have an account? Sign in',
    switchToMagicLink: 'Sign in with magic link',
    switchToPassword: 'Sign in with password',
    goBackToSignIn: 'Go back to sign in',

    // Messages
    magicLinkSent: 'Check your email for the magic link.',
    resetPasswordSent: 'Check your email for the password reset link',

    // Social auth
    socialSignInHeading: 'Sign in with',
    socialSignUpHeading: 'Sign up with',
    socialDivider: 'or continue with',
    socialSignInWith: 'Sign in with',
    socialSignUpWith: 'Sign up with',

    // Authenticated view
    loggedInSince: 'You have been logged in since',
    loggedIn: 'You are logged in.',
    signOutButton: 'Sign Out',
  },
  es: {
    signIn: 'Iniciar sesión',
    signUp: 'Registrarse',
    emailLabel: 'Dirección de correo electrónico',
    passwordLabel: 'Contraseña',
    emailPlaceholder: 'Tu dirección de correo electrónico',
    passwordPlaceholder: 'Tu contraseña',
    signInButton: 'Iniciar sesión',
    signUpButton: 'Registrarse',
    magicLinkButton: 'Enviar enlace mágico',
    resetPasswordButton: 'Enviar instrucciones para restablecer contraseña',

    // Link texts
    switchToSignUp: '¿No tienes una cuenta? Regístrate',
    switchToSignIn: '¿Ya tienes una cuenta? Inicia sesión',
    switchToMagicLink: 'Iniciar sesión con enlace mágico',
    switchToPassword: 'Iniciar sesión con contraseña',
    goBackToSignIn: 'Volver a iniciar sesión',

    // Messages
    magicLinkSent: 'Revisa tu correo electrónico para el enlace mágico.',
    resetPasswordSent: 'Revisa tu correo electrónico para el enlace de restablecimiento de contraseña',

    // Social auth
    socialSignInHeading: 'Iniciar sesión con',
    socialSignUpHeading: 'Registrarse con',
    socialDivider: 'o continuar con',
    socialSignInWith: 'Iniciar sesión con',
    socialSignUpWith: 'Registrarse con',

    // Authenticated view
    loggedInSince: 'Has estado conectado desde',
    loggedIn: 'Estás conectado.',
    signOutButton: 'Cerrar sesión',
  }
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
  return function getText(key: keyof AuthTexts, params?: Record<string, any>): string {
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
    if (texts && texts[key]) {
      return texts[key]!
    }

    // Priority 3: Built-in translations based on locale
    if (defaultTranslations[locale] && defaultTranslations[locale][key]) {
      return defaultTranslations[locale][key]!
    }

    // Priority 4: Fallback to English
    if (defaultTranslations.en[key]) {
      return defaultTranslations.en[key]!
    }

    // Ultimate fallback: return the key itself
    return keyStr
  }
}
