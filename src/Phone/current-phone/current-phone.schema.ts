import * as mongoose from "mongoose";
// 定义mongodb的数据模型
export const currentPhoneSchema = new mongoose.Schema({
    name: String,
    phone: String,
    comment: String,
});