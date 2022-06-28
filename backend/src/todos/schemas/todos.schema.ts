/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type ToDosDocument = ToDos & Document;

@Schema()
export class ToDos {
  @Prop({ required: true })
  todo: string;

  @Prop({ required: true })
  priority: number;
}


export const ToDosSchema = SchemaFactory.createForClass(ToDo);