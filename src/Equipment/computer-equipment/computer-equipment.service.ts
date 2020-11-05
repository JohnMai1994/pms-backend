import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose"
import {ComputerEquipmentInterface} from "./class/computer-equipment.interface";

@Injectable()
export class ComputerEquipmentService {

    constructor(@InjectModel("ComputerEquipment") private readonly computerEquipmentModule: Model<ComputerEquipmentInterface>) {
    }

    // 创建
    async create(billPhone: ComputerEquipmentInterface): Promise<ComputerEquipmentInterface> {
        const createdComputerEquipment = new this.computerEquipmentModule(billPhone)
        return await createdComputerEquipment.save();
    }

    // 获取所有
    async findAll(): Promise<ComputerEquipmentInterface[]> {
        return await this.computerEquipmentModule.find().exec();
    }

    // 根据id修改
    async updateById(id: string, data: ComputerEquipmentInterface): Promise<ComputerEquipmentInterface | undefined> {
        return await this.computerEquipmentModule.findByIdAndUpdate(id, data);
    }

    // 根据id删除
    async remove(id: string): Promise<ComputerEquipmentInterface> {
        return await this.computerEquipmentModule.findByIdAndRemove(id);
    }

}
