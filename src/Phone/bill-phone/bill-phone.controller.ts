import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {BillPhoneInterface} from "./class/bill-phone.interface";
import {BillPhoneService} from "./bill-phone.service";

@Controller('bill-phone')
@ApiTags("Bill Phone手机账单")

export class BillPhoneController {
    constructor(private readonly billPhoneService: BillPhoneService) {
    }


    @Get()
    @ApiOperation({summary: "全部手机账单", description: "获取全部手机账单"})
    async getAll() {
        let billPhone;
        let res;

        try {
            billPhone = await this.billPhoneService.findAll();
            res = {
                error_code: 0,
                reason: "Success",
                result: {
                    total: billPhone.length,
                    list: billPhone
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
    @ApiOperation({summary: "新增手机账单", description: "新增新的手机账单"})
    async create(@Body() billPhoneInterface: BillPhoneInterface) {
        let billPhone;
        let res;

        try {
            billPhone = await this.billPhoneService.create(billPhoneInterface);
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
    @ApiOperation({summary: "更新手机账单", description: "更新手机账单资料"})
    async update(@Param("id") id: string, @Body() data: BillPhoneInterface) {
        let billPhone;
        let res;

        try {
            billPhone = await  this.billPhoneService.updateById(id, data);
            if (!billPhone) {
                throw new NotFoundException("Cat Don't Exist")
            }
            res = {
                error_code: 0,
                reason: "Success",
                result: billPhone
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
    @ApiOperation({summary:"删除手机账单", description: "删除手机账单资料"})
    async remove(@Param("id") id: string) {
        let res;

        try {
            await this.billPhoneService.remove(id)
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
