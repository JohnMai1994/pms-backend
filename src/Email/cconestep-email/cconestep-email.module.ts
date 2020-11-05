import { Module } from '@nestjs/common';
import { CconestepEmailController } from './cconestep-email.controller';
import { CconestepEmailService } from './cconestep-email.service';

@Module({
  controllers: [CconestepEmailController],
  providers: [CconestepEmailService]
})
export class CconestepEmailModule {}
