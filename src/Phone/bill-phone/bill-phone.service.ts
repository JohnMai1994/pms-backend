import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose"
import {BillPhoneInterface} from "./class/bill-phone.interface";


@Injectable()
export class BillPhoneService {
    constructor(@InjectModel("BillPhone") private readonly billPhoneModule: Model<BillPhoneInterface>) {
    }

    // 创建
    async create(billPhone: BillPhoneInterface): Promise<BillPhoneInterface> {
        const createdCaseEmail = new this.billPhoneModule(billPhone)
        return await createdCaseEmail.save();
    }

    // 获取所有
    async findAll(): Promise<BillPhoneInterface[]> {
        return await this.billPhoneModule.find().exec();
    }

    // 根据id修改
    async updateById(id: string, data: BillPhoneInterface): Promise<BillPhoneInterface | undefined> {
        return await this.billPhoneModule.findByIdAndUpdate(id, data);
    }

    // 根据id删除
    async remove(id: string): Promise<BillPhoneInterface> {
        return await this.billPhoneModule.findByIdAndRemove(id);
    }

}
