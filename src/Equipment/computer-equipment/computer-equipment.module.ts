import { Module } from '@nestjs/common';
import { ComputerEquipmentService } from './computer-equipment.service';
import { ComputerEquipmentController } from './computer-equipment.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {computerEquipmentSchema} from "./computer-equipment.schema";

@Module({
  // add
  imports: [MongooseModule.forFeature(
      [{name:"ComputerEquipment", schema: computerEquipmentSchema}]
  )],
  providers: [ComputerEquipmentService],
  controllers: [ComputerEquipmentController]
})
export class ComputerEquipmentModule {}
