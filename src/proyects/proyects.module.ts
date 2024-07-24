import { Module } from '@nestjs/common';
import { ProyectsController } from './proyects.controller';
import { ProyectsService } from './proyects.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Proyecto, ProyectoSchema } from './entities/proyecto.entity';

@Module({
  controllers: [ProyectsController],
  providers: [ProyectsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Proyecto.name,
        schema: ProyectoSchema,
      },
    ]),
  ],
})
export class ProyectsModule {}
