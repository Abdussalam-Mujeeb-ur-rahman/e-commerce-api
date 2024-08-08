import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class User extends Document {
    @Prop({ required: true })
    name: string;

    @Prop()
    age: number;

    @Prop({ required: true })
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
