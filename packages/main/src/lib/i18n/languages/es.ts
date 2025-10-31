import { addTranslations, type AuthTexts } from '..'
export const spanishTranslations: AuthTexts = {
  // Strings
  cancelButton: 'Cancelar',
  deleteButton: 'Eliminar',
  verifiedText: 'verificado',
  unverifiedText: 'no verificado',
  backupText: 'respaldo {count}',
  verifyCode: 'Verificar código',
  enterCode: 'Ingresar código',
  enterCodeTitle: 'Ingresa exactamente 6 dígitos',
  resendEmail: 'Reenviar correo',

  // Sign in
  signIn: 'Iniciar sesión',
  signUp: 'Registrarse',
  emailLabel: 'Dirección de correo electrónico',
  pwLabel: 'Frase de contraseña',
  pwConfirmLabel: 'Confirmar frase de contraseña',
  sendLink: 'Enviar enlace',
  resetPassword: 'Restablecer frase de contraseña',

  // Password confirmation
  pwLength: 'Tu frase de contraseña debe tener al menos {min} caracteres.',
  pwBreached: 'Tu frase de contraseña fue encontrada en al menos 1 filtración de datos. ({count})',
  pwUniqueness: 'Tu frase de contraseña debería incluir más caracteres únicos que no sean repetitivos o relacionados con el sitio o tu información personal.',
  pwLengthLabel: 'verificación de longitud',
  pwBreachedLabel: 'verificación de filtraciones',
  pwUniquenessLabel: 'verificación de singularidad',
  pwChange: 'Cambiar tu frase de contraseña',
  pwChanged: 'Frase de contraseña cambiada exitosamente.',
  pwToggle: 'mostrar u ocultar frase de contraseña',

  // Link texts
  switchToMagicLink: 'Iniciar sesión con enlace mágico',
  switchToPassword: 'Iniciar sesión con frase de contraseña',
  goBackToSignIn: 'Volver a iniciar sesión',

  // Messages
  emailLinkSent: 'Enlace de inicio enviado a {email}.',
  resetPasswordSent: 'Revisa tu correo electrónico para el enlace de restablecimiento de frase de contraseña',
  error: 'Ocurrió un error. ({error})',
  networkError: 'Debido a un error de red o servidor, no se pudo completar tu inicio de sesión. Inténtalo de nuevo o recarga esta página. ({error})',
  invalidCodeError: 'Código inválido. Verifica e inténtalo de nuevo.',
  authenticationError: 'Falló la autenticación. Inténtalo de nuevo. ({error})',
  noAuthMethods: 'No se han habilitado métodos de autenticación.',

  // Email verification
  linkEnterCodeHeading: 'Verificación de Enlace Mágico',
  linkEnterCodeLabel: 'Haz clic en el enlace del correo enviado a {email}, o ingresa el código de verificación a continuación.',

  // Social auth
  socialHeading: 'Iniciar sesión con',
  socialDivider: 'o continuar con',
  socialSignIn: 'Iniciar sesión con {provider}',
  socialLinking: 'Vincular cuenta de {provider}',
  socialUnlinkIdentityConfirmation: '¿Estás seguro de que quieres desvincular la cuenta de {provider} para el correo {email}?',

  // Authenticated view
  signedIn: 'Estás conectado.',
  createdTime: 'Creado: {time}',
  signedInTime: 'Último acceso: {time}',
  signedInEmail: 'Correo: {email}',
  signOutButton: 'Cerrar sesión',
  accountSecurityHeading: 'Seguridad de la cuenta',
  changeEmail: 'Cambiar correo electrónico',
  deleteAccount: 'Eliminar cuenta',
  accountDeleted: 'Cuenta eliminada exitosamente.',

  // MFA
  mfaFactorListHeading: 'Tokens de autenticación multifactor',
  verified: 'verificado',
  unverified: 'no verificado',
  mfaNoFactorsText: 'Sin tokens de autenticación',
  mfaWarningText: '¡Advertencia! Solo tienes UN token de autenticación multifactor guardado. '
    + 'Si pierdes ese token, puede ser imposible recuperar el acceso a tu cuenta. '
    + 'Se recomienda agregar al menos un token de respaldo a tu cuenta, y guardar los '
    + 'códigos proporcionados en un lugar seguro como claves de recuperación. Para hacer esto, toma una captura '
    + 'del código de respuesta rápida o copia la clave secreta a un lugar seguro.',
  mfaAddFactorLink: 'agregar un nuevo token de autenticación',
  mfaNoDeleteError: 'No puedes eliminar el último método de autenticación cuando la autenticación multifactor es requerida.',
  mfaDeleteFactorConfirmation: '¿Estás seguro de que quieres eliminar el token de autenticación multifactor {name}?',
  // MFA required
  mfaRequired: 'La autenticación multifactor es requerida para tu cuenta. Configura un token para continuar.',
  // Add MFA screen
  mfaAddFactorParagraph: 'Agrega un token de autenticación multifactor a tu cuenta.',
  mfaFriendlyNameLabel: 'Nombre (para que identifiques este token)',
  mfaAddFactorButton: 'Generar nuevo token',
  mfaScanQRCode: 'Escanea el código de respuesta rápida a continuación en tu aplicación de autenticación:',
  mfaEnterSecret: 'O ingresa el siguiente secreto manualmente:',
  // MFA Challenge screen
  mfaSelectLabel: 'Código de autenticación:',
  mfaEnterCodeHeading: 'Autenticación Multifactor',
  mfaEnterCodeLabel: 'Ingresa el código de tu aplicación de autenticación:',
  mfaChallengeNotInitialized: 'Desafío no inicializado',

  // Providers
  providersListHeading: 'Cuentas Vinculadas',
  noProviders: 'Sin cuentas vinculadas',

  // Additional UI strings
  loadingAuthMethods: 'Cargando métodos de autenticación...',
  enterValidName: 'Por favor ingresa un nombre válido (1-50 caracteres)',
  enterVerificationCode: 'Por favor ingresa el código de verificación enviado a tu correo electrónico.',
  emailVerifiedSuccess: '¡Correo verificado exitosamente!',
  hideSecret: 'Ocultar',
  showSecret: 'Mostrar Secreto',

  // Aria labels for accessibility
  linkedAccountLabel: 'Cuenta vinculada en {provider}',
  deleteLinkedAccountLabel: 'Eliminar cuenta vinculada de {provider} ({email})',
  mfaTokenLabel: 'Autenticador multifactor {name}',
  deleteMfaTokenLabel: 'Eliminar autenticador multifactor {name}',
  qrCodeAlt: 'Código de respuesta rápida para configuración de contraseña temporal',
  totpSecretLabel: 'Clave secreta temporal',
}

// Auto-register when imported
addTranslations('es', spanishTranslations)
