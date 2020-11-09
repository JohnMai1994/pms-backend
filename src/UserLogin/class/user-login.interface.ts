import { Document } from 'mongoose';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";


export class UserLoginInterface extends Document {
    @ApiModelProperty({description: "用户名"})
    readonly username: string;
    @ApiModelProperty({description: "密码"})
    readonly password: string;

}
