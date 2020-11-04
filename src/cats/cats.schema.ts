import * as mongoose from "mongoose";
// 定义mongodb的数据模型
export const CatScheme = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
});