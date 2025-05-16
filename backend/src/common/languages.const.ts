export const SUPPORTED_LANGUAGES = ['en', 'fr', 'es'] as const;
export type SupportedLang = (typeof SUPPORTED_LANGUAGES)[number];
