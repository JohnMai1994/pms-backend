import { Module } from '@nestjs/common';
import { CasedepEmailService } from './casedep-email.service';
import { CasedepEmailController } from './casedep-email.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {casedepEmailSchema} from "./casedep-email.schema";

@Module({
  //  add
  imports: [MongooseModule.forFeature(
      [{name: "CasedepEmail", schema:casedepEmailSchema }]
  )],

  providers: [CasedepEmailService],
  controllers: [CasedepEmailController]
})
export class CasedepEmailModule {}
