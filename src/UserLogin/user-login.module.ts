import { Module } from '@nestjs/common';
import { UserLoginService } from './user-login.service';
import { UserLoginController } from './user-login.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {userLoginSchema} from "./user-login.schema";

@Module({
  // add
  imports: [MongooseModule.forFeature(
      [{name: "UserLogin", schema: userLoginSchema}]
  )],
  providers: [UserLoginService],
  controllers: [UserLoginController]
})
export class UserLoginModule {}
