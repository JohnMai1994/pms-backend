import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import {MongooseModule } from  "@nestjs/mongoose"

@Module({
  imports: [CatsModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/cconestepBackend')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
