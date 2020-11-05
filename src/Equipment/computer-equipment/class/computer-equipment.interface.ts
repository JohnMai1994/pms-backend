import { Document } from 'mongoose';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";


export class ComputerEquipmentInterface extends Document {
    @ApiModelProperty({description: "电脑使用者"})
    readonly name: string;
    @ApiModelProperty({description: "电脑位置"})
    readonly position: string;
    @ApiModelProperty({description: "电脑系统"})
    readonly system: string;
    @ApiModelProperty({description: "电脑CPU"})
    readonly cpu: string;
    @ApiModelProperty({description: "电脑内存条"})
    readonly ram: string;
    @ApiModelProperty({description: "电脑状态"})
    readonly condition: string;
    @ApiModelProperty({description: "电脑使用年份"})
    readonly usageYear: string;
    @ApiModelProperty({description: "电脑备注"})
    readonly comment: string;
}
