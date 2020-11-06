import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {CconestepEmailService} from "./cconestep-email.service";
import {CconestepEmailInterface} from "./class/cconestep-email.interface";

@Controller('cconestep-email')
@ApiTags("Cconestep加合邮箱")
export class CconestepEmailController {
    constructor(private readonly cconestepEmailService: CconestepEmailService) {
    }

    @Get()
    @ApiOperation({summary: "全部邮箱", description: "获取全部邮箱"})
    async getAll() {
        let cconestepEmail;
        let res;

        try {
            cconestepEmail = await this.cconestepEmailService.findAll();
            res = {
                error_code: 0,
                reason: "Success",
                result: {
                    total: cconestepEmail.length,
                    list: cconestepEmail
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
    async create(@Body() cconestepEmailInterface: CconestepEmailInterface) {
        let cconestepEmail;
        let res;

        try {
            cconestepEmail = this.cconestepEmailService.create(cconestepEmailInterface);
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
    async update(@Param("id") id: string, @Body() data: CconestepEmailInterface) {
        let cconestepEmail;
        let res;

        try {
            cconestepEmail = await  this.cconestepEmailService.updateById(id, data);
            if (!cconestepEmail) throw new NotFoundException("Cat Don't Exist")
            res = {
                error_code: 0,
                reason: "Success",
                result: cconestepEmail
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
            await this.cconestepEmailService.remove(id)
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
