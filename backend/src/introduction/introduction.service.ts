import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class IntroductionService {
  constructor(private readonly cacheService: CacheService) {}

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

    const cached = this.cacheService.get(cacheKey);
    if (cached) {
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

    this.cacheService.set(cacheKey, { timestamp: now, data: response });

    return response;
  }
}
