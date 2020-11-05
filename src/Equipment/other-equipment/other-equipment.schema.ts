import * as mongoose from "mongoose";
// 定义mongodb的数据模型
export const otherEquipmentSchema = new mongoose.Schema({
    name: String,
    brand: String,
    position: String,
    condition: String,
    usageYear: String,
    comment: String,
});