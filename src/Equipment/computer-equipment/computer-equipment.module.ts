import { Module } from '@nestjs/common';
import { ComputerEquipmentService } from './computer-equipment.service';
import { ComputerEquipmentController } from './computer-equipment.controller';

@Module({
  providers: [ComputerEquipmentService],
  controllers: [ComputerEquipmentController]
})
export class ComputerEquipmentModule {}
