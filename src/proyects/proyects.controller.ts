import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ParseUUIDPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProyectsService } from './proyects.service';
import { Proyecto } from './interfaces/proyect.interface';
import { CreateProyectDto } from './dto/create-proyect.dto';
import { UpdateProyectDto } from './dto/update-proyect.dto';

@Controller('proyects')
//@UsePipes(ValidationPipe)
export class ProyectsController {
  constructor(private readonly proyectsService: ProyectsService) {}

  @Get()
  getProyects(): Proyecto[] {
    return this.proyectsService.findAll();
  }

  @Get(':id')
  getProyectById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Proyecto {
    console.log({ id });
    return this.proyectsService.findOneById(id);
  }

  @Post()
  createProyect(@Body() createProyectDto: CreateProyectDto) {
    return this.proyectsService.create(createProyectDto);
  }

  @Patch(':id')
  updateProyect(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProyectDto: UpdateProyectDto,
  ) {
    console.log({ updateProyectDto });
    return this.proyectsService.update(id, updateProyectDto);
  }

  @Delete(':id')
  deleteProyect(@Param('id', ParseUUIDPipe) id: string) {
    return this.proyectsService.delete(id);
  }
}
