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
  pwLength: 'Les phrases de passe doivent contenir au moins {min} caractères, de préférence au moins 15.',
  pwAddLetter: 'Considérez augmenter la complexité en ajoutant des lettres.',
  pwAddNumber: 'Considérez augmenter la complexité en ajoutant des chiffres.',
  pwAddSpecial: 'Considérez augmenter la complexité en ajoutant des caractères spéciaux.',
  pwAddSpace: 'Considérez utiliser une phrase de passe incluant des espaces.',
  pwBreached: 'Votre phrase de passe a été trouvée dans au moins 1 fuite de données. ({count})',
  pwRepetitive: 'Votre phrase de passe devrait contenir plus de caractères uniques.',
  pwDomain: 'Votre phrase de passe inclut du texte spécifique au site.',
  pwSignupConfirm: 'Votre phrase de passe a les problèmes suivants ; êtes-vous sûr de vouloir vous inscrire ? Appuyez sur "Annuler" pour changer votre phrase de passe.',
  pwBreachedLabel: 'Vérification des fuites',
  pwRepetitiveLabel: 'Vérification de répétition',
  pwDomainLabel: 'Vérification des termes spécifiques au site',

  // Link texts
  switchToMagicLink: 'Se connecter avec un lien magique',
  switchToPassword: 'Se connecter avec une phrase de passe',
  goBackToSignIn: 'Retour à la connexion',

  // Messages
  emailLinkSent: 'Lien de connexion envoyé à {email}.',
  resetPasswordSent: 'Vérifiez votre e-mail pour le lien de réinitialisation de la phrase de passe',
  networkError: 'En raison d\'une erreur réseau ou serveur, votre connexion n\'a pas pu être complétée. Veuillez réessayer ou recharger cette page. ({error})',
  invalidCodeError: 'Code invalide. Veuillez vérifier et réessayer.',
  authenticationError: 'Échec de l\'authentification. Veuillez réessayer. ({error})',

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
  changePassword: 'Changer la phrase de passe',
  deleteAccount: 'Supprimer le compte',

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

  // Providers
  providersListHeading: 'Comptes Liés',
  noProviders: 'Aucun compte lié',

  // Additional UI strings
  loadingAuthMethods: 'Chargement des méthodes d\'authentification...',
  enterValidName: 'Veuillez entrer un nom valide (1-50 caractères)',
  enterVerificationCode: 'Veuillez entrer le code de vérification',
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
