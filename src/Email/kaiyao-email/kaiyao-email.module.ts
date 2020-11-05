import { Module } from '@nestjs/common';
import { KaiyaoEmailService } from './kaiyao-email.service';
import { KaiyaoEmailController } from './kaiyao-email.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {kaiyaoEmailSchema} from "./kaiyao-email.schema";

@Module({
  // add
  imports: [MongooseModule.forFeature(
      [{name: "KaiyaoEmail", schema: kaiyaoEmailSchema}]
  )],

  providers: [KaiyaoEmailService],
  controllers: [KaiyaoEmailController]
})
export class KaiyaoEmailModule {}
