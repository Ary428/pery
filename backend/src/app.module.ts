import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntroductionModule } from './introduction/introduction.module';
import { UserModule } from './user/user.module';
import { CacheService } from './cache/cache.service';

@Module({
  imports: [IntroductionModule, UserModule],
  controllers: [AppController],
  providers: [AppService, CacheService],
})
export class AppModule {}
