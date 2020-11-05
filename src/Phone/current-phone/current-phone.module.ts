import { Module } from '@nestjs/common';
import { CurrentPhoneService } from './current-phone.service';
import { CurrentPhoneController } from './current-phone.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {currentPhoneSchema} from "./current-phone.schema";

@Module({
  // add
  imports: [MongooseModule.forFeature(
      [{name: "CurrentPhone", schema: currentPhoneSchema}]
  )],

  providers: [CurrentPhoneService],
  controllers: [CurrentPhoneController]
})
export class CurrentPhoneModule {}
