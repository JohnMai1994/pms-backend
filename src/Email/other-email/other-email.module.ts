import { Module } from '@nestjs/common';
import { OtherEmailService } from './other-email.service';
import { OtherEmailController } from './other-email.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {otherEmailSchema} from "./other-email.schema";

@Module({
  // add
  imports: [MongooseModule.forFeature(
      [{name: "OtherEmail", schema: otherEmailSchema}]
  )],
  providers: [OtherEmailService],
  controllers: [OtherEmailController]
})
export class OtherEmailModule {}
