import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose"
import {KaiyaoEmailInterface} from "./class/kaiyao-email.interface";


@Injectable()
export class KaiyaoEmailService {
    constructor(@InjectModel("KaiyaoEmail") private readonly kaiyaoEmailModule: Model<KaiyaoEmailInterface>) {
    }

    //创建
    async create(kaiyaoEmail: KaiyaoEmailInterface): Promise<KaiyaoEmailInterface> {
        const createdKaiyaoEmail = new this.kaiyaoEmailModule(kaiyaoEmail);
        return await createdKaiyaoEmail.save();
    }

    // 获取所有
    async findAll(): Promise<KaiyaoEmailInterface[]> {
        return await this.kaiyaoEmailModule.find().exec();
    }

    // 根据id修改
    async updateById(id: string, data: KaiyaoEmailInterface): Promise<KaiyaoEmailInterface | undefined> {
        return await this.kaiyaoEmailModule.findByIdAndUpdate(id, data);
    }

    // 根据id删除
    async remove(id: string): Promise<KaiyaoEmailInterface> {
        return await this.kaiyaoEmailModule.findByIdAndRemove(id);
    }


}
