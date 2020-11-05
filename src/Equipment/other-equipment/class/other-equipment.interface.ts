import { Document } from 'mongoose';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";


export class OtherEquipmentInterface extends Document {
    @ApiModelProperty({description: "设备名字"})
    readonly name: string;
    @ApiModelProperty({description: "设备牌子"})
    readonly brand: string;
    @ApiModelProperty({description: "设备位置"})
    readonly position: string;
    @ApiModelProperty({description: "设备状态"})
    readonly condition: string;
    @ApiModelProperty({description: "设备使用年份"})
    readonly usageYear: string;
    @ApiModelProperty({description: "设备备注"})
    readonly comment: string;
}
