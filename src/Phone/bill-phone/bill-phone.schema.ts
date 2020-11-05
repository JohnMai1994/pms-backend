import * as mongoose from "mongoose";
// 定义mongodb的数据模型
export const billPhoneSchema = new mongoose.Schema({
    phone: String,
    service: String,
    plan: String,
    discount: String,
    cost: String,
    provider: String,
    providerNum: String,
});