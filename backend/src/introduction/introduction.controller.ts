import {
  BadRequestException,
  Controller,
  Get,
  Headers,
  Param,
} from '@nestjs/common';
import { IntroductionService } from './introduction.service';
import { UserService } from '../user/user.service';
import { resolveLanguage } from '../common/language.util';

@Controller('introduction')
export class IntroductionController {
  constructor(
    private readonly introService: IntroductionService,
    private readonly userService: UserService,
  ) {}

  @Get(':articleName')
  async getIntroduction(
    @Param('articleName') articleName: string,
    @Headers('accept-language') acceptLanguage: string | undefined,
    @Headers('x-authentication') token: string | undefined,
  ) {
    const isValid = /^[\w\-]+$/.test(articleName);
    if (!isValid) {
      throw new BadRequestException('Invalid article name');
    }

    const tokenLang = this.userService.getLanguage(token);
    const lang = resolveLanguage(tokenLang, acceptLanguage);

    return this.introService.fetchIntroduction(articleName, lang);
  }
}
