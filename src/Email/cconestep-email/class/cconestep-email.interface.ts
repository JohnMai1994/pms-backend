import { Document } from 'mongoose';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

class ChildEmail extends Document{
    @ApiModelProperty({description: "子邮箱编号"})
    readonly key: string;
    @ApiModelProperty({description: "子邮箱"})
    readonly childEmail: string;
    @ApiModelProperty({description: "子邮箱平台"})
    readonly platform: string
}



export class CconestepEmailInterface extends Document {
    @ApiModelProperty({description: "使用者"})
    readonly name: string;
    @ApiModelProperty({description: "父邮箱"})
    readonly parentEmail: string;
    @ApiModelProperty({description: "父邮箱密码"})
    readonly password: string;
    @ApiModelProperty({description: "子邮箱集"})
    readonly childrenEmail: ChildEmail[];
}
