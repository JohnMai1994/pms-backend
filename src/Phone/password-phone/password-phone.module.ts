import { Module } from '@nestjs/common';
import { PasswordPhoneService } from './password-phone.service';
import { PasswordPhoneController } from './password-phone.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {passwordPhoneSchema} from "./password-phone.schema";

@Module({
  // add
  imports: [MongooseModule.forFeature(
      [{name: "PasswordPhone", schema: passwordPhoneSchema}]
  )],
  providers: [PasswordPhoneService],
  controllers: [PasswordPhoneController]
})
export class PasswordPhoneModule {}
