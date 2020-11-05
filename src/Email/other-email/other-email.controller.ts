import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {OtherEmailInterface} from "./class/other-email.interface";
import {OtherEmailService} from "./other-email.service";

@Controller('other-email')
@ApiTags("Other其他邮箱")
export class OtherEmailController {
    constructor(private readonly otherEmailService: OtherEmailService) {
    }

    @Get()
    @ApiOperation({summary: "全部邮箱", description: "获取全部邮箱"})
    async getAll() {
        let otherEmails;
        let res;

        try {
            otherEmails = await this.otherEmailService.findAll();
            res = {
                error_code: 0,
                reason: "Success",
                result: {
                    total: otherEmails.length,
                    list: otherEmails
                }
            }
        } catch (e) {
            res = {
                error_code: 1,
                reason: "Something wrong on Connecting Your Database",
                e
            }
        }
        return res

    }

    @Post()
    @ApiOperation({summary: "新增邮箱", description: "新增新的邮箱"})
    async create(@Body() otherEmailInterface: OtherEmailInterface) {
        let otherEmails;
        let res;

        try {
            otherEmails = this.otherEmailService.create(otherEmailInterface);
            res =
                {
                    error_code: 0,
                    reason: "Success",
                    result: "创建成功"
                }
        } catch (e) {
            res = {
                error_code: "1",
                reason: "Something wrong on Connecting Your Database",
                e
            }

        }
        return res
    }

    @Put(":id")
    @ApiOperation({summary: "更新邮箱", description: "更新邮箱资料"})
    async update(@Param("id") id: string, @Body() data: OtherEmailInterface) {
        let otherEmails;
        let res;

        try {
            otherEmails = await  this.otherEmailService.updateById(id, data);
            if (!otherEmails) throw new NotFoundException("Cat Don't Exist")
            res = {
                error_code: 0,
                reason: "Success",
                result: otherEmails
            }
        }catch (e) {
            res = {
                error_code: "1",
                reason: "Go to call John Mai fix it~, If you fire him, So sorry~",
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
            await this.otherEmailService.remove(id)
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
