/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type ToDosDocument = ToDo & Document;

@Schema()
export class ToDo {
  @Prop({ required: true })
  todo: string;

  @Prop({ required: true })
  priority: number;
}


export const ToDoSchema = SchemaFactory.createForClass(ToDo);