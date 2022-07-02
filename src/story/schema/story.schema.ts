import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StoryDocument = Story & Document;

@Schema()
export class Story {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  moral: string;

  @Prop()
  story: string;
}

export const StorySchema = SchemaFactory.createForClass(Story);
