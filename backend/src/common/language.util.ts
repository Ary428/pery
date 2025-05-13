export function resolveLanguage(tokenLang?: string, acceptLang?: string): string {
    const supported = ['en', 'fr', 'es'];
  
    if (tokenLang && supported.includes(tokenLang)) return tokenLang;
  
    const preferred = (acceptLang || '').split(',')[0].toLowerCase();
    return supported.includes(preferred) ? preferred : 'en';
  }
  