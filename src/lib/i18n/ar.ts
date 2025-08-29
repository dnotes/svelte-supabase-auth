import { addTranslations, type AuthTexts } from '.'

export const arabicTranslations: AuthTexts = {
  signIn: 'تسجيل الدخول',
  signUp: 'إنشاء حساب',
  emailLabel: 'عنوان البريد الإلكتروني',
  passwordLabel: 'كلمة المرور',
  emailPlaceholder: 'عنوان بريدك الإلكتروني',
  passwordPlaceholder: 'كلمة المرور الخاصة بك',
  sendLink: 'إرسال الرابط',
  resetPassword: 'إعادة تعيين كلمة المرور',

  // Link texts
  switchToSignUp: 'ليس لديك حساب؟ أنشئ حساباً',
  switchToSignIn: 'لديك حساب بالفعل؟ سجل دخولك',
  switchToMagicLink: 'تسجيل الدخول باستخدام رابط سحري',
  switchToPassword: 'تسجيل الدخول باستخدام كلمة المرور',
  goBackToSignIn: 'العودة إلى تسجيل الدخول',

  // Messages
  magicLinkSent: 'تحقق من بريدك الإلكتروني للرابط السحري.',
  resetPasswordSent: 'تحقق من بريدك الإلكتروني لرابط إعادة تعيين كلمة المرور',

  // Social auth
  socialHeading: 'تسجيل الدخول باستخدام',
  socialDivider: 'أو المتابعة باستخدام',
  socialSignIn: 'تسجيل الدخول باستخدام {provider}',

  // Authenticated view
  signedIn: 'أنت مسجل الدخول.',
  signedInTime: 'آخر تسجيل دخول: {time}',
  signedInEmail: 'البريد الإلكتروني: {email}',
  signOutButton: 'تسجيل الخروج',
}

// Auto-register when imported
addTranslations('ar', arabicTranslations)
