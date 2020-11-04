import { Document } from 'mongoose';
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
export class Cat extends Document {
    @ApiModelProperty({description: "猫的名字"})
    readonly name: string;
    @ApiModelProperty({description: "猫的年纪"})
    readonly age: number;
    @ApiModelProperty({description: "猫的breed"})
    readonly breed: string;
}
