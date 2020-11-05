import { Module } from '@nestjs/common';
import { OtherEmailService } from './other-email.service';
import { OtherEmailController } from './other-email.controller';

@Module({
  providers: [OtherEmailService],
  controllers: [OtherEmailController]
})
export class OtherEmailModule {}
