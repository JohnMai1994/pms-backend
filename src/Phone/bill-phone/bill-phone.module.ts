import { Module } from '@nestjs/common';
import { BillPhoneController } from './bill-phone.controller';
import { BillPhoneService } from './bill-phone.service';
import {MongooseModule} from "@nestjs/mongoose";
import {billPhoneSchema} from "./bill-phone.schema";

@Module({
  // add
  imports: [MongooseModule.forFeature(
      [{name:"BillPhone", schema: billPhoneSchema}]
  )],
  controllers: [BillPhoneController],
  providers: [BillPhoneService]
})
export class BillPhoneModule {}
