import { Document } from 'mongoose';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";


export class CurrentPhoneInterface extends Document {
    @ApiModelProperty({description: "手机使用者"})
    readonly name: string;
    @ApiModelProperty({description: "手机号码"})
    readonly phone: string;
    @ApiModelProperty({description: "手机备注"})
    readonly comment: string;
}
