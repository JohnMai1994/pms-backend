import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {CaseEmailInterface} from "./class/case-email.interface";
import {CasedepEmailService} from "./casedep-email.service";

@Controller('casedep-email')
@ApiTags("Case文案部邮箱")
export class CasedepEmailController {
    constructor(private readonly casedepEmailService: CasedepEmailService) {
    }

    @Get()
    @ApiOperation({summary: "全部邮箱", description: "获取全部邮箱"})
    async getAll() {
        let casedepEmails;
        let res;

        try {
            casedepEmails = await this.casedepEmailService.findAll();
            res = {
                error_code: 0,
                reason: "Success",
                result: {
                    total: casedepEmails.length,
                    list: casedepEmails
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
    async create(@Body() caseEmailInterface: CaseEmailInterface) {
        let casedepEmails;
        let res;

        try {
            casedepEmails = this.casedepEmailService.create(caseEmailInterface);
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
    async update(@Param("id") id: string, @Body() data: CaseEmailInterface) {
        let casedepEmails;
        let res;

        try {
            casedepEmails = await  this.casedepEmailService.updateById(id, data);
            if (!casedepEmails) {
                throw new NotFoundException("Cat Don't Exist")
            }
            res = {
                error_code: 0,
                reason: "Success",
                result: casedepEmails
            }
        }catch (e) {

            res = {
                error_code: 1,
                reason: "Go to call John Mai fix it~, If you fire him, So sorry~",
                e
            }
        }
        return res
    }

    @Delete(":id")
    @ApiOperation({summary: "删除邮箱", description: "删除邮箱资料"})
    async remove(@Param("id") id: string) {
        let res;

        try {
            await this.casedepEmailService.remove(id)
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
