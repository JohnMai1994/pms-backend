import * as mongoose from "mongoose";
// 定义mongodb的数据模型

const childEmail = new mongoose.Schema({
    key: Number,
    childEmail: String,
    platform: String
}, {_id: false})

export const cconestepMailScheme = new mongoose.Schema({
    name: String,
    parentEmail: String,
    password: String,
    childrenEmail: [childEmail]
});


