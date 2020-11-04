import { Module } from '@nestjs/common';
import { CconestepMailController } from './cconestep-mail.controller';
import { CconestepMailService } from './cconestep-mail.service';

@Module({
  controllers: [CconestepMailController],
  providers: [CconestepMailService]
})
export class CconestepMailModule {

}
