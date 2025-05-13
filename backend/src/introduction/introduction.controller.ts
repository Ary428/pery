import { BadRequestException, Controller, Get, Param, Headers } from '@nestjs/common';

@Controller('introduction')
export class IntroductionController {
  @Get(':articleName')
  getIntroduction(
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

    return {
      scrapeDate: Date.now(),
      articleName,
      language,
      introduction: 'This is a placeholder.'
    };
  }
}
