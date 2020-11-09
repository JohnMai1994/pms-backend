import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose"
import {UserLoginInterface} from "./class/user-login.interface";


@Injectable()
export class UserLoginService {
    constructor(@InjectModel("UserLogin") private readonly userLoginModule: Model<UserLoginInterface>) {}

    // 创建
    async create(userLoginInterface: UserLoginInterface): Promise<UserLoginInterface> {
        const createdUser = new this.userLoginModule(userLoginInterface)
        return await createdUser.save();
    }

    // 获取所有
    async findAll(): Promise<UserLoginInterface[]> {
        return await this.userLoginModule.find().exec();
    }

    // 根据UserName获取
    async findByName(username: string) : Promise<UserLoginInterface | undefined> {
        return await this.userLoginModule.find({username}).exec();
    }

    // 根据id修改
    async updateById(id: string, data: UserLoginInterface): Promise<UserLoginInterface | undefined> {
        return await this.userLoginModule.findByIdAndUpdate(id, data);
    }

    // 根据id删除
    async remove(id: string): Promise<UserLoginInterface> {
        return await this.userLoginModule.findByIdAndRemove(id);
    }



}
