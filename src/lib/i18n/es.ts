import { addTranslations, type AuthTexts } from '.'
export const spanishTranslations: AuthTexts = {
  signIn: 'Iniciar sesión',
  signUp: 'Registrarse',
  emailLabel: 'Dirección de correo electrónico',
  passwordLabel: 'Contraseña',
  emailPlaceholder: 'Tu dirección de correo electrónico',
  passwordPlaceholder: 'Tu contraseña',
  sendLink: 'Enviar enlace',
  resetPassword: 'Restablecer contraseña',

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
  socialHeading: 'Iniciar sesión con',
  socialDivider: 'o continuar con',
  socialSignIn: 'Iniciar sesión con {provider}',

  // Authenticated view
  loggedIn: 'Estás conectado.',
  loggedInTime: 'Último acceso: {time}',
  loggedInEmail: 'Correo: {email}',
  signOutButton: 'Cerrar sesión',
}

// Auto-register when imported
addTranslations('es', spanishTranslations)
