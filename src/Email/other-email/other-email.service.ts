import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose"
import {OtherEmailInterface} from "./class/other-email.interface";

@Injectable()
export class OtherEmailService {
    constructor(@InjectModel("OtherEmail") private readonly otherEmailModule: Model<OtherEmailInterface>) {}

    // 创建
    async create(caseEmail: OtherEmailInterface): Promise<OtherEmailInterface> {
        const createdCaseEmail = new this.otherEmailModule(caseEmail)
        return await createdCaseEmail.save();
    }

    // 获取所有
    async findAll(): Promise<OtherEmailInterface[]> {
        return await this.otherEmailModule.find().exec();
    }

    // 根据id修改
    async updateById(id: string, data: OtherEmailInterface): Promise<OtherEmailInterface | undefined> {
        return await this.otherEmailModule.findByIdAndUpdate(id, data);
    }

    // 根据id删除
    async remove(id: string): Promise<OtherEmailInterface> {
        return await this.otherEmailModule.findByIdAndRemove(id);
    }

}
