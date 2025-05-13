import { Module } from '@nestjs/common';
import { IntroductionController } from './introduction.controller';
import { IntroductionService } from './introduction.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [IntroductionController],
  providers: [IntroductionService]
})
export class IntroductionModule {}
