import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@Controller()
@ApiTags("默认标签")
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    @ApiOperation({summary: "首页返回",description:"应该返回Hello"})
    getHello(): string {
        return this.appService.getHello();
    }

}
