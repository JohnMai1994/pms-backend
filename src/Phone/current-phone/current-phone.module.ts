import { Module } from '@nestjs/common';
import { CurrentPhoneService } from './current-phone.service';
import { CurrentPhoneController } from './current-phone.controller';

@Module({
  providers: [CurrentPhoneService],
  controllers: [CurrentPhoneController]
})
export class CurrentPhoneModule {}
