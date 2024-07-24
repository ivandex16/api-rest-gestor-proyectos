import { Module } from '@nestjs/common';
import { ProyectsModule } from './proyects/proyects.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/gestor-proyecto'),
    ProyectsModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
