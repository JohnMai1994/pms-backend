import { Document } from 'mongoose';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";


export class CaseEmailInterface extends Document {
    @ApiModelProperty({description: "Case文案部邮箱使用者"})
    readonly name: string;
    @ApiModelProperty({description: "Case文案部邮箱名称"})
    readonly email: string;
    @ApiModelProperty({description: "Case文案部邮箱密码"})
    readonly password: string;
}
