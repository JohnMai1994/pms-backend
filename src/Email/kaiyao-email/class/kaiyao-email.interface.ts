import { Document } from 'mongoose';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";


export class KaiyaoEmailInterface extends Document {
    @ApiModelProperty({description: "Kaiyao邮箱使用者"})
    readonly name: string;
    @ApiModelProperty({description: "Kaiyao邮箱名称"})
    readonly email: string;
    @ApiModelProperty({description: "Kaiyao邮箱密码"})
    readonly password: string;
}
