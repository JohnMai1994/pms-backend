import { Module } from '@nestjs/common';
import { BillPhoneController } from './bill-phone.controller';
import { BillPhoneService } from './bill-phone.service';

@Module({
  controllers: [BillPhoneController],
  providers: [BillPhoneService]
})
export class BillPhoneModule {}
