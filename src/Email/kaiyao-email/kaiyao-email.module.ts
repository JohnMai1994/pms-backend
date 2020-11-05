import { Module } from '@nestjs/common';
import { KaiyaoEmailService } from './kaiyao-email.service';
import { KaiyaoEmailController } from './kaiyao-email.controller';

@Module({
  providers: [KaiyaoEmailService],
  controllers: [KaiyaoEmailController]
})
export class KaiyaoEmailModule {}
