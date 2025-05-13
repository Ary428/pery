import { BadRequestException, Controller, Get, Param } from '@nestjs/common';

@Controller('introduction')
export class IntroductionController {
  @Get(':articleName')
  getIntroduction(@Param('articleName') articleName: string) {
    const isValid = /^[\w\-]+$/.test(articleName);
    if (!isValid) {
      throw new BadRequestException('Invalid article name');
    }

    return {
      scrapeDate: Date.now(),
      articleName,
      introduction: 'This is a placeholder.'
    };
  }
}
