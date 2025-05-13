import { Module } from '@nestjs/common';
import { IntroductionController } from './introduction.controller';
import { IntroductionService } from './introduction.service';
import { UserModule } from '../user/user.module';
import { CacheService } from '../cache/cache.service';
@Module({
  imports: [UserModule],
  controllers: [IntroductionController],
  providers: [IntroductionService, CacheService],
})
export class IntroductionModule {}
