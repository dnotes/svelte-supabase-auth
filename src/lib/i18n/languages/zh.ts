import { addTranslations, type AuthTexts } from '..'

export const chineseTranslations: AuthTexts = {
  // Strings
  cancelButton: '取消',
  deleteButton: '删除',
  verifiedText: '已验证',
  unverifiedText: '未验证',
  backupText: '备份 {count}',
  verifyCode: '验证代码',
  enterCode: '输入代码',
  resendEmail: '重新发送邮件',

  // Sign in
  signIn: '登录',
  signUp: '注册',
  emailLabel: '邮箱地址',
  pwLabel: '密码短语',
  pwConfirmLabel: '确认密码短语',
  sendLink: '发送链接',
  resetPassword: '重置密码短语',

  // Password confirmation
  pwLength: '您的密码短语必须至少包含 {min} 个字符。',
  pwBreached: '您的密码短语在至少 1 次数据泄露中被发现。({count})',
  pwUniqueness: '您的密码短语应包含更多不重复或与站点或您的个人信息无关的独特字符。',
  pwLengthLabel: '长度检查',
  pwBreachedLabel: '泄露检查',
  pwUniquenessLabel: '独特性检查',
  pwChange: '更改您的密码短语',
  pwChanged: '密码短语修改成功。',

  // Link texts
  switchToMagicLink: '使用魔法链接登录',
  switchToPassword: '使用密码短语登录',
  goBackToSignIn: '返回登录',

  // Messages
  emailLinkSent: '登录链接已发送至 {email}。',
  resetPasswordSent: '请查看您的邮箱获取密码短语重置链接',
  networkError: '由于网络或服务器错误，无法完成您的登录。请重试或刷新此页面。({error})',
  invalidCodeError: '代码无效。请检查后重试。',
  authenticationError: '身份验证失败。请重试。({error})',

  // Email verification
  linkEnterCodeHeading: '魔法链接验证',
  linkEnterCodeLabel: '点击发送至 {email} 邮件中的链接，或在下方输入验证代码。',

  // Social auth
  socialHeading: '使用以下方式登录',
  socialDivider: '或继续使用',
  socialSignIn: '使用 {provider} 登录',
  socialLinking: '关联 {provider} 账户',
  socialUnlinkIdentityConfirmation: '您确定要解除邮箱 {email} 的 {provider} 账户关联吗？',

  // Authenticated view
  signedIn: '您已登录。',
  createdTime: '创建时间：{time}',
  signedInTime: '上次登录：{time}',
  signedInEmail: '邮箱：{email}',
  signOutButton: '退出登录',
  accountSecurityHeading: '账户安全',
  changeEmail: '更改邮箱',
  deleteAccount: '删除账户',

  // MFA
  mfaFactorListHeading: '多因素身份验证令牌',
  verified: '已验证',
  unverified: '未验证',
  mfaNoFactorsText: '无身份验证令牌',
  mfaWarningText: '警告！您只保存了一个多因素身份验证令牌。'
    + '如果您丢失了该令牌，可能无法恢复对您账户的访问。'
    + '建议您至少为账户添加一个备份令牌，并将'
    + '提供的代码保存在安全的地方作为恢复密钥。为此，请截取'
    + '二维码的屏幕截图或将密钥复制到安全的地方。',
  mfaAddFactorLink: '添加新的身份验证令牌',
  mfaNoDeleteError: '当需要多因素身份验证时，您无法删除最后一种身份验证方法。',
  mfaDeleteFactorConfirmation: '您确定要删除多因素身份验证令牌 {name} 吗？',
  // MFA required
  mfaRequired: '您的账户需要多因素身份验证。请设置令牌以继续。',
  // Add MFA screen
  mfaAddFactorParagraph: '为您的账户添加多因素身份验证令牌。',
  mfaFriendlyNameLabel: '名称（用于识别此令牌）',
  mfaAddFactorButton: '生成新令牌',
  mfaScanQRCode: '在您的身份验证应用中扫描下方二维码：',
  mfaEnterSecret: '或手动输入以下密钥：',
  // MFA Challenge screen
  mfaSelectLabel: '验证代码：',
  mfaEnterCodeHeading: '多因素身份验证',
  mfaEnterCodeLabel: '输入您身份验证应用中的代码：',

  // Providers
  providersListHeading: '关联账户',
  noProviders: '无关联账户',

  // Additional UI strings
  loadingAuthMethods: '正在加载身份验证方法...',
  enterValidName: '请输入有效名称（1-50个字符）',
  enterVerificationCode: '请输入发送到您邮箱的验证代码。',
  emailVerifiedSuccess: '邮箱验证成功！',
  hideSecret: '隐藏',
  showSecret: '显示密钥',

  // Aria labels for accessibility
  linkedAccountLabel: '在 {provider} 上的关联账户',
  deleteLinkedAccountLabel: '删除 {provider} 的关联账户 ({email})',
  mfaTokenLabel: '多因素身份验证器 {name}',
  deleteMfaTokenLabel: '删除多因素身份验证器 {name}',
  qrCodeAlt: '时间密码短语设置二维码',
  totpSecretLabel: '时间密码短语密钥',
}

// Auto-register when imported
addTranslations('zh', chineseTranslations)
