import * as mongoose from "mongoose";
// 定义mongodb的数据模型
export const computerEquipmentSchema = new mongoose.Schema({
    name: String,
    position: String,
    system: String,
    cpu: String,
    store: String,
    ram: String,
    condition: String,
    usageYear: String,
    comment: String,
});