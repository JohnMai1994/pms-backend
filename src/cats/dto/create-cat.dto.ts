import { Document } from 'mongoose';
export interface CreateCatDto  extends Document {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}
