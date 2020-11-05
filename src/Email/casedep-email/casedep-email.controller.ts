import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {CaseEmailInterface} from "./class/case-email.interface";

@Controller('casedep-email')
@ApiTags("Case文案部邮箱")
export class CasedepEmailController {
    @Get()
    @ApiOperation({summary: "全部邮箱", description: "获取全部邮箱"})
    async getAll() {

        return "Case getAll"

    }

    @Post()
    @ApiOperation({summary: "新增邮箱", description: "新增新的邮箱"})
    async create(@Body() caseEmailInterface: CaseEmailInterface) {


        return "Case create"
    }

    @Put("id")
    @ApiOperation({summary: "更新邮箱", description: "更新邮箱资料"})
    async update(@Param() id: string, @Body() data: CaseEmailInterface) {
        return "Case update"

    }

    @Delete("id")
    @ApiOperation({summary:"删除邮箱", description: "删除邮箱资料"})
    async remove(@Param() id: string) {
        return "Case remove"
    }

}
