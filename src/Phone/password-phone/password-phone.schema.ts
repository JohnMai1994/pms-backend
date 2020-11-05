import * as mongoose from "mongoose";
// 定义mongodb的数据模型
export const passwordPhoneSchema = new mongoose.Schema({
    user: String,
    phone: String,
    type: String,
    wechat: String,
    password: String,
    voicemail: String,
    icloudEmail: String,
    icloudPassword: String,
    previousUsers: String,
});