import { Controller, Get, Param } from '@nestjs/common';

@Controller('introduction')
export class IntroductionController {
  @Get(':articleName')
  getIntroduction(@Param('articleName') articleName: string) {
    return {
      scrapeDate: Date.now(),
      articleName,
      introduction: 'This is a placeholder.'
    };
  }
}
