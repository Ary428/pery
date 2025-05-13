import { BadRequestException, Controller, Get, Headers, Param } from '@nestjs/common';
import axios from 'axios';

const cache = new Map<string, { timestamp: number; data: any }>();
const CACHE_TTL = 5 * 60 * 1000;
@Controller('introduction')
export class IntroductionController {
  @Get(':articleName')
  async getIntroduction(
    @Param('articleName') articleName: string,
    @Headers('accept-language') acceptLanguage: string
  ) {
    const isValid = /^[\w\-]+$/.test(articleName);
    if (!isValid) {
      throw new BadRequestException('Invalid article name');
    }

    const supportedLanguages = ['en', 'fr', 'es'];
    const preferred = (acceptLanguage || '').split(',')[0].toLowerCase();
    const language = supportedLanguages.includes(preferred) ? preferred : 'en';

    const cacheKey = `${language}:${articleName}`;
    const now = Date.now();

    if (cache.has(cacheKey)) {
      const cached = cache.get(cacheKey)!;
      if (now - cached.timestamp < CACHE_TTL) {
        console.log('Cache hit');
        return cached.data;
      }
    }

    console.log('Cache miss');

    const url = `https://${language}.wikipedia.org/api/rest_v1/page/summary/${articleName}`;
    const res = await axios.get(url);

    const response = {
      scrapeDate: now,
      articleName,
      language,
      introduction: res.data.extract,
    };

    cache.set(cacheKey, { timestamp: now, data: response });

    return response;
  }
}
