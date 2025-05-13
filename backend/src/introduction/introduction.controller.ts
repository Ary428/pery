import { BadRequestException, Controller, Get, Headers, Param } from '@nestjs/common';
import axios from 'axios';

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

    const url = `https://${language}.wikipedia.org/api/rest_v1/page/summary/${articleName}`;
    const res = await axios.get(url);

    return {
      scrapeDate: Date.now(),
      articleName,
      language,
      introduction: res.data.extract
    };
  }
}
