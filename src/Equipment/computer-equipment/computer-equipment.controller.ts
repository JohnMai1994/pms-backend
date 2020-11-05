import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {ComputerEquipmentInterface} from "./class/computer-equipment.interface";
import {ComputerEquipmentService} from "./computer-equipment.service";

@Controller('computer-equipment')
@ApiTags("Computer Equipment电脑设备")
export class ComputerEquipmentController {
    constructor(private readonly computerEquipmentService: ComputerEquipmentService) {
    }

    @Get()
    @ApiOperation({summary: "全部电脑设备", description: "获取全部电脑设备"})
    async getAll() {
        let computerEquipment;
        let res;

        try {
            computerEquipment = await this.computerEquipmentService.findAll();
            res = {
                error_code: 0,
                reason: "Success",
                result: {
                    total: computerEquipment.length,
                    list: computerEquipment
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
    @ApiOperation({summary: "新增电脑设备", description: "新增新的电脑设备"})
    async create(@Body() computerEquipmentInterface: ComputerEquipmentInterface) {

        let computerEquipment;
        let res;

        try {
            computerEquipment = await this.computerEquipmentService.create(computerEquipmentInterface);
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
    @ApiOperation({summary: "更新电脑设备", description: "更新电脑设备"})
    async update(@Param("id") id: string, @Body() data: ComputerEquipmentInterface) {
        let computerEquipment;
        let res;

        try {
            computerEquipment = await  this.computerEquipmentService.updateById(id, data);
            if (!computerEquipment) {
                throw new NotFoundException("Cat Don't Exist")
            }
            res = {
                error_code: 0,
                reason: "Success",
                result: computerEquipment
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
    @ApiOperation({summary: "删除电脑设备", description: "删除电脑设备"})
    async remove(@Param("id") id: string) {
        let res;

        try {
            await this.computerEquipmentService.remove(id)
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
