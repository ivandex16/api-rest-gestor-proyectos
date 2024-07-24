import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Proyecto extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    index: true,
  })
  description: string;

  @Prop({
    index: true,
  })
  date: string;

  @Prop({
    index: true,
  })
  status: string;

  @Prop({
    index: true,
  })
  priority: string;

  @Prop({
    index: true,
  })
  responsable: string;

  @Prop({
    index: true,
  })
  tasks: string[];
}

export const ProyectoSchema = SchemaFactory.createForClass(Proyecto);
