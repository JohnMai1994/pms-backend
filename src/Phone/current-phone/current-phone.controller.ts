import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {CurrentPhoneInterface} from "./class/current-phone.interface";
import {KaiyaoEmailService} from "../../Email/kaiyao-email/kaiyao-email.service";
import {CurrentPhoneService} from "./current-phone.service";

@Controller('current-phone')
@ApiTags("Current Phone当前手机表")
export class CurrentPhoneController {
    constructor(private readonly currentPhoneService: CurrentPhoneService) {
    }

    @Get()
    @ApiOperation({summary: "全部手机", description: "获取全部手机"})
    async getAll() {

        let currentPhone;
        let res;

        try {
            currentPhone = await this.currentPhoneService.findAll();
            res = {
                error_code: 0,
                reason: "Success",
                result: {
                    total: currentPhone.length,
                    list: currentPhone
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
    @ApiOperation({summary: "新增手机", description: "新增新的手机"})
    async create(@Body() currentPhoneInterface: CurrentPhoneInterface) {

        let currentPhone;
        let res;

        try {
            currentPhone = this.currentPhoneService.create(currentPhoneInterface);
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
    @ApiOperation({summary: "更新手机", description: "更新手机资料"})
    async update(@Param("id") id: string, @Body() data: CurrentPhoneInterface) {
        let currentPhone;
        let res;

        try {
            currentPhone = await  this.currentPhoneService.updateById(id, data);
            if (!currentPhone) throw new NotFoundException("Cat Don't Exist")
            res = {
                error_code: 0,
                reason: "Success",
                result: currentPhone
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
    @ApiOperation({summary:"删除手机", description: "删除手机资料"})
    async remove(@Param("id") id: string) {
        let res;

        try {
            await this.currentPhoneService.remove(id)
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
