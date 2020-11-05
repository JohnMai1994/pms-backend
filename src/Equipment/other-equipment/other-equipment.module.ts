import { Module } from '@nestjs/common';
import { OtherEquipmentController } from './other-equipment.controller';
import { OtherEquipmentService } from './other-equipment.service';

@Module({
  controllers: [OtherEquipmentController],
  providers: [OtherEquipmentService]
})
export class OtherEquipmentModule {}
