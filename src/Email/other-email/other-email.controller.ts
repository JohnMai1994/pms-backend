import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {OtherEmailInterface} from "./class/other-email.interface";

@Controller('other-email')
@ApiTags("Other其他邮箱")
export class OtherEmailController {
    @Get()
    @ApiOperation({summary: "全部邮箱", description: "获取全部邮箱"})
    async getAll() {

        return "Other getAll"

    }

    @Post()
    @ApiOperation({summary: "新增邮箱", description: "新增新的邮箱"})
    async create(@Body() otherEmailInterface: OtherEmailInterface) {


        return "Other create"
    }

    @Put("id")
    @ApiOperation({summary: "更新邮箱", description: "更新邮箱资料"})
    async update(@Param() id: string, @Body() data: OtherEmailInterface) {
        return "Other update"

    }

    @Delete("id")
    @ApiOperation({summary:"删除邮箱", description: "删除邮箱资料"})
    async remove(@Param() id: string) {
        return "Other remove"
    }

}
