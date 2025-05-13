import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CacheService } from 'src/cache/cache.service';

let counter = 0;
@Injectable()
export class IntroductionService {
  constructor(private readonly cacheService: CacheService) {}

  async fetchIntroduction(articleName: string, language: string) {
    const cacheKey = `${language}:${articleName}`;
    const now = Date.now();

    const cached = this.cacheService.get(cacheKey);
    if (cached) {
      return cached;
    }

    const url = `https://${language}.wikipedia.org/api/rest_v1/page/summary/${articleName}`;
    const res = await axios.get(url);

    const response = {
      scrapeDate: now,
      articleName,
      language,
      introduction: res.data.extract,
    };

    this.cacheService.set(cacheKey, response);

    return response;
  }
}
