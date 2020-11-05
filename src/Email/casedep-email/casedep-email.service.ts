import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose"
import {CaseEmailInterface} from "./class/case-email.interface";

@Injectable()
export class CasedepEmailService {
    constructor(@InjectModel("CasedepEmail") private readonly casedepEmailModule: Model<CaseEmailInterface>) {}

    // 创建
    async create(caseEmail: CaseEmailInterface): Promise<CaseEmailInterface> {
        const createdCaseEmail = new this.casedepEmailModule(caseEmail)
        return await createdCaseEmail.save();
    }

    // 获取所有
    async findAll(): Promise<CaseEmailInterface[]> {
        return await this.casedepEmailModule.find().exec();
    }

    // 根据id修改
    async updateById(id: string, data: CaseEmailInterface): Promise<CaseEmailInterface | undefined> {
        return await this.casedepEmailModule.findByIdAndUpdate(id, data);
    }

    // 根据id删除
    async remove(id: string): Promise<CaseEmailInterface> {
        return await this.casedepEmailModule.findByIdAndRemove(id);
    }
}
