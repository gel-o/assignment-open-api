import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiService } from './api/api.service';
import { ApiController } from './api/api.controller';

@Module({
  imports: [],
  controllers: [AppController, ApiController],
  providers: [AppService, ApiService],
})
export class AppModule {}
