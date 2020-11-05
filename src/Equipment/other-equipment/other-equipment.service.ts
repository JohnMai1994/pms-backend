import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose"
import {OtherEquipmentInterface} from "./class/other-equipment.interface";

@Injectable()
export class OtherEquipmentService {
    constructor(@InjectModel("OtherEquipment") private readonly otherEquipmentModule: Model<OtherEquipmentInterface>) {
    }

    // 创建
    async create(billPhone: OtherEquipmentInterface): Promise<OtherEquipmentInterface> {
        const createdCaseEmail = new this.otherEquipmentModule(billPhone)
        return await createdCaseEmail.save();
    }

    // 获取所有
    async findAll(): Promise<OtherEquipmentInterface[]> {
        return await this.otherEquipmentModule.find().exec();
    }

    // 根据id修改
    async updateById(id: string, data: OtherEquipmentInterface): Promise<OtherEquipmentInterface | undefined> {
        return await this.otherEquipmentModule.findByIdAndUpdate(id, data);
    }

    // 根据id删除
    async remove(id: string): Promise<OtherEquipmentInterface> {
        return await this.otherEquipmentModule.findByIdAndRemove(id);
    }
}
