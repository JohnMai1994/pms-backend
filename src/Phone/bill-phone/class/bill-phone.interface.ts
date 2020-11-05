import { Document } from 'mongoose';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";


export class BillPhoneInterface extends Document {
    @ApiModelProperty({description: "手机号码"})
    readonly phone: string;
    @ApiModelProperty({description: "手机服务"})
    readonly service: string;
    @ApiModelProperty({description: "手机套餐"})
    readonly plan: string;
    @ApiModelProperty({description: "手机折扣"})
    readonly discount: string;
    @ApiModelProperty({description: "手机花费"})
    readonly cost: string;
    @ApiModelProperty({description: "手机运营商"})
    readonly provider: string;
    @ApiModelProperty({description: "手机运营商号"})
    readonly providerNum: string;
}
