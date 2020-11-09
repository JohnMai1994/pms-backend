import * as mongoose from "mongoose";
// 定义mongodb的数据模型
export const userLoginSchema = new mongoose.Schema({
    username: String,
    password: String,
});