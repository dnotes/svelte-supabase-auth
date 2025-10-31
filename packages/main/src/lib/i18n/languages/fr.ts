import { addTranslations, type AuthTexts } from '..'

export const frenchTranslations: AuthTexts = {
  // Strings
  cancelButton: 'Annuler',
  deleteButton: 'Supprimer',
  verifiedText: 'vérifié',
  unverifiedText: 'non vérifié',
  backupText: 'sauvegarde {count}',
  verifyCode: 'Vérifier le code',
  enterCode: 'Entrer le code',
  enterCodeTitle: 'Entrez exactement 6 chiffres',
  resendEmail: 'Renvoyer l\'e-mail',

  // Sign in
  signIn: 'Se connecter',
  signUp: "S'inscrire",
  emailLabel: 'Adresse e-mail',
  pwLabel: 'Phrase de passe',
  pwConfirmLabel: 'Confirmer la phrase de passe',
  sendLink: 'Envoyer le lien',
  resetPassword: 'Réinitialiser la phrase de passe',

  // Password confirmation
  pwLength: 'Votre phrase de passe doit contenir au moins {min} caractères.',
  pwBreached: 'Votre phrase de passe a été trouvée dans au moins 1 fuite de données. ({count})',
  pwUniqueness: 'Votre phrase de passe devrait inclure plus de caractères uniques qui ne sont pas répétitifs ou liés au site ou à vos informations personnelles.',
  pwLengthLabel: 'vérification de longueur',
  pwBreachedLabel: 'vérification des fuites',
  pwUniquenessLabel: 'vérification d\'unicité',
  pwChange: 'Changer votre phrase de passe',
  pwChanged: 'Phrase de passe changée avec succès.',
  pwToggle: 'afficher ou masquer la phrase de passe',

  // Link texts
  switchToMagicLink: 'Se connecter avec un lien magique',
  switchToPassword: 'Se connecter avec une phrase de passe',
  goBackToSignIn: 'Retour à la connexion',

  // Messages
  emailLinkSent: 'Lien de connexion envoyé à {email}.',
  resetPasswordSent: 'Vérifiez votre e-mail pour le lien de réinitialisation de la phrase de passe',
  error: 'Une erreur s\'est produite. ({error})',
  networkError: 'En raison d\'une erreur réseau ou serveur, votre connexion n\'a pas pu être complétée. Veuillez réessayer ou recharger cette page. ({error})',
  invalidCodeError: 'Code invalide. Veuillez vérifier et réessayer.',
  authenticationError: 'Échec de l\'authentification. Veuillez réessayer. ({error})',
  noAuthMethods: 'Aucune méthode d\'authentification n\'a été activée.',

  // Email verification
  linkEnterCodeHeading: 'Vérification de Lien Magique',
  linkEnterCodeLabel: 'Cliquez sur le lien dans l\'e-mail envoyé à {email}, ou entrez le code de vérification ci-dessous.',

  // Social auth
  socialHeading: 'Se connecter avec',
  socialDivider: 'ou continuer avec',
  socialSignIn: 'Se connecter avec {provider}',
  socialLinking: 'Lier le compte {provider}',
  socialUnlinkIdentityConfirmation: 'Êtes-vous sûr de vouloir délier le compte {provider} pour l\'e-mail {email} ?',

  // Authenticated view
  signedIn: 'Vous êtes connecté.',
  createdTime: 'Créé : {time}',
  signedInTime: 'Dernière connexion : {time}',
  signedInEmail: 'E-mail : {email}',
  signOutButton: 'Se déconnecter',
  accountSecurityHeading: 'Sécurité du compte',
  changeEmail: 'Changer l\'e-mail',
  deleteAccount: 'Supprimer le compte',
  accountDeleted: 'Compte supprimé avec succès.',

  // MFA
  mfaFactorListHeading: 'Jetons d\'authentification multifacteur',
  verified: 'vérifié',
  unverified: 'non vérifié',
  mfaNoFactorsText: 'Aucun jeton d\'authentification',
  mfaWarningText: 'Attention ! Vous n\'avez qu\'UN seul jeton d\'authentification multifacteur sauvegardé. '
    + 'Si vous perdez ce jeton, il pourrait être impossible de récupérer l\'accès à votre compte. '
    + 'Il est recommandé d\'ajouter au moins un jeton de sauvegarde à votre compte, et de sauvegarder les '
    + 'codes fournis dans un endroit sécurisé comme clés de récupération. Pour ce faire, prenez une capture d\'écran '
    + 'du code de réponse rapide ou copiez la clé secrète dans un endroit sécurisé.',
  mfaAddFactorLink: 'ajouter un nouveau jeton d\'authentification',
  mfaNoDeleteError: 'Vous ne pouvez pas supprimer la dernière méthode d\'authentification quand l\'authentification multifacteur est requise.',
  mfaDeleteFactorConfirmation: 'Êtes-vous sûr de vouloir supprimer le jeton d\'authentification multifacteur {name} ?',
  // MFA required
  mfaRequired: 'L\'authentification multifacteur est requise pour votre compte. Veuillez configurer un jeton pour continuer.',
  // Add MFA screen
  mfaAddFactorParagraph: 'Ajoutez un jeton d\'authentification multifacteur à votre compte.',
  mfaFriendlyNameLabel: 'Nom (pour vous permettre d\'identifier ce jeton)',
  mfaAddFactorButton: 'Générer un nouveau jeton',
  mfaScanQRCode: 'Scannez le code de réponse rapide ci-dessous dans votre application d\'authentification :',
  mfaEnterSecret: 'Ou entrez le secret suivant manuellement :',
  // MFA Challenge screen
  mfaSelectLabel: 'Code d\'authentification :',
  mfaEnterCodeHeading: 'Authentification Multifacteur',
  mfaEnterCodeLabel: 'Entrez le code de votre application d\'authentification :',
  mfaChallengeNotInitialized: 'Défi non initialisé',

  // Providers
  providersListHeading: 'Comptes Liés',
  noProviders: 'Aucun compte lié',

  // Additional UI strings
  loadingAuthMethods: 'Chargement des méthodes d\'authentification...',
  enterValidName: 'Veuillez entrer un nom valide (1-50 caractères)',
  enterVerificationCode: 'Veuillez entrer le code de vérification envoyé à votre e-mail.',
  emailVerifiedSuccess: 'E-mail vérifié avec succès !',
  hideSecret: 'Masquer',
  showSecret: 'Afficher le Secret',

  // Aria labels for accessibility
  linkedAccountLabel: 'Compte lié sur {provider}',
  deleteLinkedAccountLabel: 'Supprimer le compte lié de {provider} ({email})',
  mfaTokenLabel: 'Authentificateur multifacteur {name}',
  deleteMfaTokenLabel: 'Supprimer l\'authentificateur multifacteur {name}',
  qrCodeAlt: 'Code de réponse rapide pour la configuration de phrase de passe temporelle',
  totpSecretLabel: 'Clé secrète temporelle',
}

// Auto-register when imported
addTranslations('fr', frenchTranslations)
