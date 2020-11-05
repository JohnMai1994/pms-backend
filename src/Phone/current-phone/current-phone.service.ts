import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose"
import {CurrentPhoneInterface} from "./class/current-phone.interface";


@Injectable()
export class CurrentPhoneService {
    constructor(@InjectModel("CurrentPhone") private readonly currentPhoneModule: Model<CurrentPhoneInterface>) {
    }

    //创建
    async create(currentPhone: CurrentPhoneInterface): Promise<CurrentPhoneInterface> {
        const createdKaiyaoEmail = new this.currentPhoneModule(currentPhone);
        return await createdKaiyaoEmail.save();
    }

    // 获取所有
    async findAll(): Promise<CurrentPhoneInterface[]> {
        return await this.currentPhoneModule.find().exec();
    }

    // 根据id修改
    async updateById(id: string, data: CurrentPhoneInterface): Promise<CurrentPhoneInterface | undefined> {
        return await this.currentPhoneModule.findByIdAndUpdate(id, data);
    }

    // 根据id删除
    async remove(id: string): Promise<CurrentPhoneInterface> {
        return await this.currentPhoneModule.findByIdAndRemove(id);
    }

}
