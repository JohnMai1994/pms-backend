import { Module } from '@nestjs/common';
import { PasswordPhoneService } from './password-phone.service';
import { PasswordPhoneController } from './password-phone.controller';

@Module({
  providers: [PasswordPhoneService],
  controllers: [PasswordPhoneController]
})
export class PasswordPhoneModule {}
