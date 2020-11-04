import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Cat} from "./interfaces/cat.interface";
import {Model} from  "mongoose";
import {CreateCatDto } from "./dto/create-cat.dto"

@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private readonly catsModule: Model<Cat>) {
    }

    //创建cats
    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catsModule(createCatDto);
        return await createdCat.save();
    }
    //获取所有cats&
    async findAll(): Promise<Cat[]> {
        return await this.catsModule.find().exec();
    }

}
