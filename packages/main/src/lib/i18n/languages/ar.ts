import { addTranslations, type AuthTexts } from '..'

export const arabicTranslations: AuthTexts = {
  // Strings
  cancelButton: 'إلغاء',
  deleteButton: 'حذف',
  verifiedText: 'مُتحقق منه',
  unverifiedText: 'غير مُتحقق منه',
  backupText: 'نسخة احتياطية {count}',
  verifyCode: 'التحقق من الرمز',
  enterCode: 'إدخال الرمز',
  enterCodeTitle: 'أدخل 6 أرقام بالضبط',
  resendEmail: 'إعادة إرسال البريد الإلكتروني',

  // Sign in
  signIn: 'تسجيل الدخول',
  signUp: 'إنشاء حساب',
  emailLabel: 'عنوان البريد الإلكتروني',
  pwLabel: 'عبارة المرور',
  pwConfirmLabel: 'تأكيد عبارة المرور',
  sendLink: 'إرسال الرابط',
  resetPassword: 'إعادة تعيين عبارة المرور',
  resetPasswordLabel: 'لإعادة تعيين عبارة المرور، قم بتسجيل الدخول باستخدام الرابط أو الرمز المرسل إلى بريدك الإلكتروني ثم قم بتغييرها من خلال إعدادات أمان الحساب.',

  // Password confirmation
  pwLength: 'يجب أن تحتوي عبارة المرور على {min} حرف على الأقل.',
  pwBreached: 'تم العثور على عبارة المرور الخاصة بك في تسريب واحد على الأقل من البيانات. ({count})',
  pwUniqueness: 'يجب أن تتضمن عبارة المرور أحرف فريدة أكثر وليست متكررة أو مرتبطة بالموقع أو معلوماتك الشخصية.',
  pwLengthLabel: 'فحص الطول',
  pwBreachedLabel: 'فحص التسريب',
  pwUniquenessLabel: 'فحص التفرد',
  pwChange: 'تغيير عبارة المرور',
  pwChanged: 'تم تغيير عبارة المرور بنجاح.',
  pwToggle: 'إظهار أو إخفاء عبارة المرور',

  // Link texts
  switchToMagicLink: 'تسجيل الدخول باستخدام رابط سحري',
  switchToPassword: 'تسجيل الدخول باستخدام عبارة المرور',
  goBackToSignIn: 'العودة إلى تسجيل الدخول',

  // Messages
  emailLinkSent: 'تم إرسال رابط تسجيل الدخول إلى {email}.',
  error: 'حدث خطأ. ({error})',
  networkError: 'بسبب خطأ في الشبكة أو الخادم، لم يتمكن من إكمال تسجيل دخولك. يرجى المحاولة مرة أخرى أو إعادة تحميل هذه الصفحة. ({error})',
  invalidCodeError: 'رمز غير صالح. يرجى التحقق والمحاولة مرة أخرى.',
  authenticationError: 'فشل في المصادقة. يرجى المحاولة مرة أخرى. ({error})',
  noAuthMethods: 'لم يتم تفعيل طرق المصادقة.',

  // Email verification
  linkEnterCodeHeading: 'التحقق من الرابط السحري',
  linkEnterCodeLabel: 'انقر على الرابط في البريد الإلكتروني المرسل إلى {email}، أو أدخل رمز التحقق أدناه.',

  // Social auth
  socialHeading: 'تسجيل الدخول باستخدام',
  socialDivider: 'أو المتابعة باستخدام',
  socialSignIn: 'تسجيل الدخول باستخدام {provider}',
  socialLinking: 'ربط حساب {provider}',
  socialUnlinkIdentityConfirmation: 'هل أنت متأكد من أنك تريد إلغاء ربط حساب {provider} للبريد الإلكتروني {email}؟',

  // Authenticated view
  signedIn: 'أنت مسجل الدخول.',
  createdTime: 'تم الإنشاء: {time}',
  signedInTime: 'آخر تسجيل دخول: {time}',
  signedInEmail: 'البريد الإلكتروني: {email}',
  signOutButton: 'تسجيل الخروج',
  accountSecurityHeading: 'أمان الحساب',
  changeEmail: 'تغيير البريد الإلكتروني',
  deleteAccount: 'حذف الحساب',
  accountDeleted: 'تم حذف الحساب بنجاح.',

  // MFA
  mfaFactorListHeading: 'رموز المصادقة متعددة العوامل',
  verified: 'مُتحقق منه',
  unverified: 'غير مُتحقق منه',
  mfaNoFactorsText: 'لا توجد رموز مصادقة',
  mfaWarningText: 'تحذير! لديك رمز واحد فقط من رموز المصادقة متعددة العوامل محفوظ. '
    + 'إذا فقدت هذا الرمز، قد يكون من المستحيل استعادة الوصول إلى حسابك. '
    + 'يُنصح بإضافة رمز احتياطي واحد على الأقل إلى حسابك، وحفظ '
    + 'الرموز المقدمة في مكان آمن كمفاتيح استرداد. للقيام بذلك، التقط لقطة شاشة '
    + 'لرمز الاستجابة السريعة أو انسخ المفتاح السري إلى مكان آمن.',
  mfaAddFactorLink: 'إضافة رمز مصادقة جديد',
  mfaNoDeleteError: 'لا يمكنك حذف طريقة المصادقة الأخيرة عندما تكون المصادقة متعددة العوامل مطلوبة.',
  mfaDeleteFactorConfirmation: 'هل أنت متأكد من أنك تريد حذف رمز المصادقة متعددة العوامل {name}؟',
  // MFA required
  mfaRequired: 'المصادقة متعددة العوامل مطلوبة لحسابك. يرجى إعداد رمز للمتابعة.',
  // Add MFA screen
  mfaAddFactorParagraph: 'أضف رمز مصادقة متعددة العوامل إلى حسابك.',
  mfaFriendlyNameLabel: 'الاسم (لتتمكن من تحديد هذا الرمز)',
  mfaAddFactorButton: 'إنشاء رمز جديد',
  mfaScanQRCode: 'امسح رمز الاستجابة السريعة أدناه في تطبيق المصادقة الخاص بك:',
  mfaEnterSecret: 'أو أدخل السر التالي يدوياً:',
  // MFA Challenge screen
  mfaSelectLabel: 'رمز المصادقة:',
  mfaEnterCodeHeading: 'المصادقة متعددة العوامل',
  mfaEnterCodeLabel: 'أدخل الرمز من تطبيق المصادقة الخاص بك:',
  mfaChallengeNotInitialized: 'لم يتم تهيئة التحدي',

  // Providers
  providersListHeading: 'الحسابات المربوطة',
  noProviders: 'لا توجد حسابات مربوطة',

  // Additional UI strings
  loadingAuthMethods: 'تحميل طرق المصادقة...',
  enterValidName: 'يرجى إدخال اسم صالح (1-50 حرف)',
  enterVerificationCode: 'يرجى إدخال رمز التحقق المرسل إلى بريدك الإلكتروني.',
  emailVerifiedSuccess: 'تم التحقق من البريد الإلكتروني بنجاح!',
  hideSecret: 'إخفاء',
  showSecret: 'إظهار السر',

  // Aria labels for accessibility
  linkedAccountLabel: 'حساب مربوط على {provider}',
  deleteLinkedAccountLabel: 'حذف الحساب المربوط من {provider} ({email})',
  mfaTokenLabel: 'مصادق متعدد العوامل {name}',
  deleteMfaTokenLabel: 'حذف المصادق متعدد العوامل {name}',
  qrCodeAlt: 'رمز الاستجابة السريعة لإعداد عبارة المرور المؤقتة',
  totpSecretLabel: 'المفتاح السري المؤقت',
}

// Auto-register when imported
addTranslations('ar', arabicTranslations)
