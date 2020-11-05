import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose"
import {PasswordPhoneInterface} from "./class/password-phone.interface";


@Injectable()
export class PasswordPhoneService {
    constructor(@InjectModel("PasswordPhone") private readonly passwordPhoneModule: Model<PasswordPhoneInterface>) {}

    // 创建
    async create(caseEmail: PasswordPhoneInterface): Promise<PasswordPhoneInterface> {
        const createdCaseEmail = new this.passwordPhoneModule(caseEmail)
        return await createdCaseEmail.save();
    }

    // 获取所有
    async findAll(): Promise<PasswordPhoneInterface[]> {
        return await this.passwordPhoneModule.find().exec();
    }

    // 根据id修改
    async updateById(id: string, data: PasswordPhoneInterface): Promise<PasswordPhoneInterface | undefined> {
        return await this.passwordPhoneModule.findByIdAndUpdate(id, data);
    }

    // 根据id删除
    async remove(id: string): Promise<PasswordPhoneInterface> {
        return await this.passwordPhoneModule.findByIdAndRemove(id);
    }



}
