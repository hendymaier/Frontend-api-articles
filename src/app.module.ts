import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionBdModule } from './connection-bd/connection-bd.module';

import { ScheduleModule } from "@nestjs/schedule";
import { ArticlesModule } from './api/articles/articles.module';




@Module({
  imports: [ScheduleModule.forRoot(),ConnectionBdModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
