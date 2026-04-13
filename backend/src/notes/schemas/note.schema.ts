import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Note {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    autopopulate : true,
  })
  userId: mongoose.Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;
  @Prop({ default: [] })
  tags: string[];
}

export const noteSchema = SchemaFactory.createForClass(Note);
