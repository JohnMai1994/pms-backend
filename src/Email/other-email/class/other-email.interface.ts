import { Document } from 'mongoose';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";


export class OtherEmailInterface extends Document {
    @ApiModelProperty({description: "Other其他邮箱使用者"})
    readonly name: string;
    @ApiModelProperty({description: "Other其他邮箱名称"})
    readonly email: string;
    @ApiModelProperty({description: "Other其他邮箱密码"})
    readonly password: string;
}
