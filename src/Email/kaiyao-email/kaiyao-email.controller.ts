import {Controller, Get, Post, Body, Put, Param, Delete, NotFoundException} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {KaiyaoEmailInterface} from "./class/kaiyao-email.interface"
import {KaiyaoEmailService} from "./kaiyao-email.service";

@Controller('kaiyao-email')
@ApiTags("Kaiyao凯耀邮箱")
export class KaiyaoEmailController {
    constructor(private readonly kaiyaoEmailService: KaiyaoEmailService) {
    }


    @Get()
    @ApiOperation({summary: "全部邮箱", description: "获取全部邮箱"})
    async getAll() {
        let kaiyaoEmail;
        let res;

        try {
            kaiyaoEmail = await this.kaiyaoEmailService.findAll();
            res = {
                error_code: 0,
                reason: "Success",
                result: {
                    total: kaiyaoEmail.length,
                    list: kaiyaoEmail
                }
            }
        } catch (e) {
            res = {
                error_code: 1,
                reason: "Something on Connecting Your Database",
                e
            }
        }
        return res

    }

    @Post()
    @ApiOperation({summary: "新增邮箱", description: "新增新的邮箱"})
    async create(@Body() kaiyaoEmailInterface: KaiyaoEmailInterface) {
        let kaiyaoEmail;
        let res;

        try {
            kaiyaoEmail = this.kaiyaoEmailService.create(kaiyaoEmailInterface);
            res =
                {
                    error_code: 0,
                    reason: "Success",
                    result: "创建成功"
                }
        } catch (e) {
            res = {
                error_code: "1",
                reason: "Something on Connecting Your Database",
                e
            }

        }
        return res
    }

    @Put(":id")
    @ApiOperation({summary: "更新邮箱", description: "更新邮箱资料"})
    async update(@Param("id") id: string, @Body() data: KaiyaoEmailInterface) {
        let kaiyaoEmail;
        let res;

        try {
            kaiyaoEmail = await  this.kaiyaoEmailService.updateById(id, data);
            if (!kaiyaoEmail) throw new NotFoundException("Cat Don't Exist")
            res = {
                error_code: 0,
                reason: "Success",
                result: kaiyaoEmail
            }
        }catch (e) {
            res = {
                error_code: "1",
                reason: "Something on Connecting Your Database",
                e
            }
        }
        return res

    }

    @Delete(":id")
    @ApiOperation({summary:"删除邮箱", description: "删除邮箱资料"})
    async remove(@Param("id") id: string) {
        let res;

        try {
            await this.kaiyaoEmailService.remove(id)
            res =
                {
                    error_code: 0,
                    reason: "Success",
                    result: "删除成功"
                }
        } catch (e) {
            res = {
                error_code: "1",
                reason: "Something on Connecting Your Database",
                e
            }
        }
        return res
    }



}
