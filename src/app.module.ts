import { Module } from '@nestjs/common';
import { ProyectsModule } from './proyects/proyects.module';

@Module({
  imports: [ProyectsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
