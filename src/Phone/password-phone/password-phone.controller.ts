import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {PasswordPhoneInterface} from "./class/password-phone.interface";
import {PasswordPhoneService} from "./password-phone.service";

@Controller('password-phone')
@ApiTags("Password Phone手机密码表")
export class PasswordPhoneController {
    constructor(private readonly passwordPhoneService: PasswordPhoneService) {
    }

    @Get()
    @ApiOperation({summary: "全部手机密码表", description: "获取全部手机密码表"})
    async getAll() {

        let passwordPhone;
        let res;

        try {
            passwordPhone = await this.passwordPhoneService.findAll();
            res = {
                error_code: 0,
                reason: "Success",
                result: {
                    total: passwordPhone.length,
                    list: passwordPhone
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
    @ApiOperation({summary: "新增手机密码表", description: "新增新的手机密码表"})
    async create(@Body() passwordPhoneInterface: PasswordPhoneInterface) {

        let passwordPhone;
        let res;

        try {
            passwordPhone = this.passwordPhoneService.create(passwordPhoneInterface);
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
    @ApiOperation({summary: "更新手机密码表", description: "更新手机密码表"})
    async update(@Param("id") id: string, @Body() data: PasswordPhoneInterface) {
        let passwordPhone;
        let res;

        try {
            passwordPhone = await  this.passwordPhoneService.updateById(id, data);
            if (!passwordPhone) throw new NotFoundException("Cat Don't Exist")
            res = {
                error_code: 0,
                reason: "Success",
                result: passwordPhone
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
    @ApiOperation({summary:"删除手机密码表", description: "删除手机密码表"})
    async remove(@Param("id") id: string) {
        let res;

        try {
            await this.passwordPhoneService.remove(id)
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
