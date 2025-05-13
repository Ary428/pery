import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class IntroductionService {
  private readonly cache = new Map<string, { timestamp: number; data: any }>();
  private readonly CACHE_TTL = 5 * 60 * 1000;

  private supportedLanguages = ['en', 'fr', 'es'];

  getLanguage(
    tokenLang: string | undefined,
    acceptLang: string | undefined,
  ): string {
    if (tokenLang && this.supportedLanguages.includes(tokenLang))
      return tokenLang;
    const preferred = (acceptLang || '').split(',')[0].toLowerCase();
    return this.supportedLanguages.includes(preferred) ? preferred : 'en';
  }

  async fetchIntroduction(articleName: string, language: string) {
    const cacheKey = `${language}:${articleName}`;
    const now = Date.now();

    const cached = this.cache.get(cacheKey);
    if (cached && now - cached.timestamp < this.CACHE_TTL) {
      return cached.data;
    }

    const url = `https://${language}.wikipedia.org/api/rest_v1/page/summary/${articleName}`;
    const res = await axios.get(url);

    const response = {
      scrapeDate: now,
      articleName,
      language,
      introduction: res.data.extract,
    };

    this.cache.set(cacheKey, { timestamp: now, data: response });

    return response;
  }
}
