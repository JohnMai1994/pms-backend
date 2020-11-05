import { Document } from 'mongoose';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";


export class PasswordPhoneInterface extends Document {
    @ApiModelProperty({description: "手机使用者"})
    readonly user: string;
    @ApiModelProperty({description: "手机号码"})
    readonly phone: string;
    @ApiModelProperty({description: "手机类型"})
    readonly type: string;
    @ApiModelProperty({description: "手机微信号"})
    readonly wechat: string;
    @ApiModelProperty({description: "手机密码"})
    readonly password: string;
    @ApiModelProperty({description: "手机语言留言箱密码"})
    readonly voicemail: string;
    @ApiModelProperty({description: "iCloud账号"})
    readonly icloudEmail: string;
    @ApiModelProperty({description: "iCloud账号密码"})
    readonly icloudPassword: string;
    @ApiModelProperty({description: "手机前使用者"})
    readonly previousUsers: string;
}
