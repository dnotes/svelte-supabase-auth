import langs from 'iso-639-1'
export const languages = Object.fromEntries(langs.getLanguages(['en', 'ar', 'es', 'fr', 'zh']).map(l => [l.code, l.nativeName]))