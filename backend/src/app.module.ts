import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IntroductionModule } from './introduction/introduction.module';

@Module({
  imports: [IntroductionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
