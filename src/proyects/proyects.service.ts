import { Injectable, NotFoundException } from '@nestjs/common';
import { Proyecto } from './interfaces/proyect.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateProyectDto, UpdateProyectDto } from './dto';

@Injectable()
export class ProyectsService {
  private proyects: Proyecto[] = [
    {
      id: uuidv4(),
      name: 'Proyecto 1',
      responsable: 'Pablo',
      date: '21/07/2024',
      priority: 'baja',
      description: 'Descripcion 1',
      status: 'In progress',
      tasks: ['Task 1', 'Task 2'],
    },

    {
      id: uuidv4(),
      name: 'Proyecto 2',
      responsable: 'Ivan',
      date: '21/07/2024',
      priority: 'alta',
      description: 'Descripcion 2',
      status: 'In progress',
      tasks: ['Task 1', 'Task 2'],
    },
    {
      id: uuidv4(),
      name: 'Proyecto 3',
      responsable: 'Juan',
      date: '21/07/2024',
      priority: 'media',
      description: 'Descripcion 3',
      status: 'In progress',
      tasks: ['Task 1', 'Task 2'],
    },
  ];

  findAll(): Proyecto[] {
    return this.proyects;
  }

  findOneById(id: string) {
    const proyectos = this.proyects.find((proyecto) => proyecto.id === id);
    if (!proyectos)
      throw new NotFoundException(`Proyecto con id ${id} no encontrado`);
    return proyectos;
  }

  create(createProyectDto: CreateProyectDto) {
    console.log(createProyectDto);
    const proyecto: Proyecto = {
      id: uuidv4(),
      ...createProyectDto,
    };
    this.proyects.push(proyecto);
    return createProyectDto;
  }

  update(id: string, updateProyectDto: UpdateProyectDto) {
    let proyectDB = this.findOneById(id);

    if (updateProyectDto.id && updateProyectDto.id !== id)
      throw new NotFoundException('No se puede cambiar el id del proyecto');

    this.proyects = this.proyects.map((proyecto) => {
      if (proyecto.id === id) {
        proyectDB = { ...proyectDB, ...updateProyectDto };
        return proyectDB;
      }
      return proyecto;
    });
    return proyectDB;
  }

  delete(id: string) {
    const proyecto = this.findOneById(id);

    this.proyects = this.proyects.filter((proyecto) => proyecto.id !== id);
    // return {
    //   method: 'DELETE',
    //   message: `Proyecto con id ${id} eliminado`,
    // };
  }
}
