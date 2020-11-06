import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {


    return '欢迎来到我的的后端频道~嘿嘿';
  }
}
