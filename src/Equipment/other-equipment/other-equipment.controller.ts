import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {OtherEquipmentInterface} from "./class/other-equipment.interface";
import {OtherEquipmentService} from "./other-equipment.service";

@Controller('other-equipment')
@ApiTags("Other Equipment其他设备")
export class OtherEquipmentController {
    constructor(private readonly otherEquipmentService: OtherEquipmentService) {
    }

    @Get()
    @ApiOperation({summary: "全部其他设备", description: "获取全部其他设备"})
    async getAll() {
        let otherEquipment;
        let res;

        try {
            otherEquipment = await this.otherEquipmentService.findAll();
            res = {
                error_code: 0,
                reason: "Success",
                result: {
                    total: otherEquipment.length,
                    list: otherEquipment
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
    @ApiOperation({summary: "新增其他设备", description: "新增新的其他设备"})
    async create(@Body() otherEquipmentInterface: OtherEquipmentInterface) {

        let otherEquipment;
        let res;

        try {
            otherEquipment = await this.otherEquipmentService.create(otherEquipmentInterface);
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
    @ApiOperation({summary: "更新其他设备", description: "更新其他设备"})
    async update(@Param("id") id: string, @Body() data: OtherEquipmentInterface) {
        let otherEquipment;
        let res;

        try {
            otherEquipment = await  this.otherEquipmentService.updateById(id, data);
            if (!otherEquipment) {
                throw new NotFoundException("Cat Don't Exist")
            }
            res = {
                error_code: 0,
                reason: "Success",
                result: otherEquipment
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
    @ApiOperation({summary: "删除其他设备", description: "删除其他设备"})
    async remove(@Param("id") id: string) {
        let res;

        try {
            await this.otherEquipmentService.remove(id)
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
