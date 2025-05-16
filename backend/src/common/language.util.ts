import * as parser from 'accept-language-parser';
import { SUPPORTED_LANGUAGES, SupportedLang } from './languages.const';
export function resolveLanguage(
  acceptLangHeader: string | undefined,
  tokenLang: string | undefined,
): SupportedLang {
  if (tokenLang && SUPPORTED_LANGUAGES.includes(tokenLang as SupportedLang)) {
    return tokenLang as SupportedLang;
  }

  if (acceptLangHeader) {
    const parsed = parser.parse(acceptLangHeader);
    for (const item of parsed) {
      const code = item.code.toLowerCase();
      if (SUPPORTED_LANGUAGES.includes(code as SupportedLang)) {
        return code as SupportedLang;
      }
    }
  }

  return 'en';
}
