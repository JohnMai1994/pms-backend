import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {KaiyaoEmailInterface} from "./class/kaiyao-email.interface"

@Controller('kaiyao-email')
@ApiTags("Kaiyao凯耀邮箱")
export class KaiyaoEmailController {

    @Get()
    @ApiOperation({summary: "全部邮箱", description: "获取全部邮箱"})
    async getAll() {

        return "Kaiyao getAll"

    }

    @Post()
    @ApiOperation({summary: "新增邮箱", description: "新增新的邮箱"})
    async create(@Body() kaiyaoEmailInterface: KaiyaoEmailInterface) {


        return "Kaiyao create"
    }

    @Put("id")
    @ApiOperation({summary: "更新邮箱", description: "更新邮箱资料"})
    async update(@Param() id: string, @Body() data: KaiyaoEmailInterface) {
        return "Kaiyao update"

    }

    @Delete("id")
    @ApiOperation({summary:"删除邮箱", description: "删除邮箱资料"})
    async remove(@Param() id: string) {
        return "Kaiyao remove"
    }



}
