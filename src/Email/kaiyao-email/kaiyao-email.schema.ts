import * as mongoose from "mongoose";
// 定义mongodb的数据模型
export const kaiyaoEmailSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});