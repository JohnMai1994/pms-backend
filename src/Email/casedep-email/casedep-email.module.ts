import { Module } from '@nestjs/common';
import { CasedepEmailService } from './casedep-email.service';
import { CasedepEmailController } from './casedep-email.controller';

@Module({
  providers: [CasedepEmailService],
  controllers: [CasedepEmailController]
})
export class CasedepEmailModule {}
