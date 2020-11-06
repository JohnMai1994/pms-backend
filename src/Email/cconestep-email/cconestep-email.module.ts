import { Module } from '@nestjs/common';
import { CconestepEmailController } from './cconestep-email.controller';
import { CconestepEmailService } from './cconestep-email.service';
import {MongooseModule} from "@nestjs/mongoose";
import {cconestepMailScheme} from "./cconestep-email.schema";

@Module({
  // add
  imports: [MongooseModule.forFeature(
      [{name: "CconestepEmail", schema: cconestepMailScheme}]
  )],

  controllers: [CconestepEmailController],
  providers: [CconestepEmailService]
})
export class CconestepEmailModule {}
