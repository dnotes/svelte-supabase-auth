import { addTranslations, type AuthTexts } from '.'

export const chineseTranslations: AuthTexts = {
  signIn: '登录',
  signUp: '注册',
  emailLabel: '邮箱地址',
  passwordLabel: '密码',
  emailPlaceholder: '您的邮箱地址',
  passwordPlaceholder: '您的密码',
  sendLink: '发送链接',
  resetPassword: '重置密码',

  // Link texts
  switchToSignUp: '没有账户？立即注册',
  switchToSignIn: '已有账户？立即登录',
  switchToMagicLink: '使用魔法链接登录',
  switchToPassword: '使用密码登录',
  goBackToSignIn: '返回登录',

  // Messages
  magicLinkSent: '请查看您的邮箱获取魔法链接。',
  resetPasswordSent: '请查看您的邮箱获取密码重置链接',

  // Social auth
  socialHeading: '使用以下方式登录',
  socialDivider: '或继续使用',
  socialSignIn: '使用 {provider} 登录',

  // Authenticated view
  signedIn: '您已登录。',
  signedInTime: '上次登录：{time}',
  signedInEmail: '邮箱：{email}',
  signOutButton: '退出登录',
}

// Auto-register when imported
addTranslations('zh', chineseTranslations)
