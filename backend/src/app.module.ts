import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntroductionModule } from './introduction/introduction.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [IntroductionModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
