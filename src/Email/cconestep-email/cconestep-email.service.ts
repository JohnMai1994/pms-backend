import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose"
import {CconestepEmailInterface} from "./class/cconestep-email.interface";

@Injectable()
export class CconestepEmailService {
    constructor(@InjectModel("CconestepEmail") private readonly cconestepEmailModule: Model<CconestepEmailInterface>) {
    }

    //创建
    async create(kaiyaoEmail: CconestepEmailInterface): Promise<CconestepEmailInterface> {
        const createdKaiyaoEmail = new this.cconestepEmailModule(kaiyaoEmail);
        return await createdKaiyaoEmail.save();
    }

    // 获取所有
    async findAll(): Promise<CconestepEmailInterface[]> {
        return await this.cconestepEmailModule.find().exec();
    }

    // 根据id修改
    async updateById(id: string, data: CconestepEmailInterface): Promise<CconestepEmailInterface | undefined> {
        return await this.cconestepEmailModule.findByIdAndUpdate(id, data);
    }

    // 根据id删除
    async remove(id: string): Promise<CconestepEmailInterface> {
        return await this.cconestepEmailModule.findByIdAndRemove(id);
    }


}
