import { addTranslations, type AuthTexts } from '.'

export const frenchTranslations: AuthTexts = {
  signIn: 'Se connecter',
  signUp: "S'inscrire",
  emailLabel: 'Adresse e-mail',
  passwordLabel: 'Mot de passe',
  emailPlaceholder: 'Votre adresse e-mail',
  passwordPlaceholder: 'Votre mot de passe',
  sendLink: 'Envoyer le lien',
  resetPassword: 'Réinitialiser le mot de passe',

  // Link texts
  switchToSignUp: "Vous n'avez pas de compte ? Inscrivez-vous",
  switchToSignIn: 'Vous avez déjà un compte ? Connectez-vous',
  switchToMagicLink: 'Se connecter avec un lien magique',
  switchToPassword: 'Se connecter avec un mot de passe',
  goBackToSignIn: 'Retour à la connexion',

  // Messages
  magicLinkSent: 'Vérifiez votre e-mail pour le lien magique.',
  resetPasswordSent: 'Vérifiez votre e-mail pour le lien de réinitialisation du mot de passe',

  // Social auth
  socialSignInHeading: 'Se connecter avec',
  socialSignUpHeading: "S'inscrire avec",
  socialDivider: 'ou continuer avec',
  socialSignInWith: 'Se connecter avec {provider}',
  socialSignUpWith: "S'inscrire avec {provider}",

  // Authenticated view
  loggedIn: 'Vous êtes connecté.',
  loggedInTime: 'Dernière connexion : {time}',
  loggedInEmail: 'E-mail : {email}',
  signOutButton: 'Se déconnecter',
}

// Auto-register when imported
addTranslations('fr', frenchTranslations)
