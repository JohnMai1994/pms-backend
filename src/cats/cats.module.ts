import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatScheme } from './cats.schema';


@Module({
  providers: [CatsService],
  controllers: [CatsController],
  // add
  imports: [MongooseModule.forFeature(
      [{name: "Cat", schema: CatScheme}]

  )]

})
export class CatsModule {}
