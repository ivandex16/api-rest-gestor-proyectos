import { Module } from '@nestjs/common';
import { ProyectsController } from './proyects.controller';
import { ProyectsService } from './proyects.service';

@Module({
  controllers: [ProyectsController],
  providers: [ProyectsService],
})
export class ProyectsModule {}
