import { Module } from '@nestjs/common';
import { OtherEquipmentController } from './other-equipment.controller';
import { OtherEquipmentService } from './other-equipment.service';
import {MongooseModule} from "@nestjs/mongoose";
import {otherEquipmentSchema} from "./other-equipment.schema";

@Module({
  // add
  imports: [MongooseModule.forFeature(
      [{name: "OtherEquipment", schema: otherEquipmentSchema}]
  )],
  controllers: [OtherEquipmentController],
  providers: [OtherEquipmentService]
})
export class OtherEquipmentModule {}
