import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Proyecto as pro } from './interfaces/proyect.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateProyectDto, UpdateProyectDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Proyecto, ProyectoSchema } from './entities/proyecto.entity';
import { Model } from 'mongoose';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ProyectsService {
  constructor(
    @InjectModel(Proyecto.name)
    private readonly proyectoModel: Model<Proyecto>,
  ) {}

  private proyects: pro[] = [
    {
      id: uuidv4(),
      name: 'Proyecto 1',
      responsable: 'Pablo',
      date: '21/07/2024',
      priority: 'baja',
      description: 'Descripcion 1',
      status: 'En progreso',
      tasks: ['Task 1', 'Task 2'],
    },

    {
      id: uuidv4(),
      name: 'Proyecto 2',
      responsable: 'Ivan',
      date: '21/07/2024',
      priority: 'alta',
      description: 'Descripcion 2',
      status: 'En progreso',
      tasks: ['Task 1', 'Task 2'],
    },
    {
      id: uuidv4(),
      name: 'Proyecto 3',
      responsable: 'Juan',
      date: '21/07/2024',
      priority: 'media',
      description: 'Descripcion 3',
      status: 'Por hacer',
      tasks: ['Task 1', 'Task 2'],
    },
  ];

  async findAll(): Promise<Proyecto[]> {
    const response = this.proyectoModel.find();
    return response;
  }

  async findOneById(id: string): Promise<Proyecto> {
    // const proyectos = this.proyects.find((proyecto) => proyecto.id === id);
    // if (!proyectos)
    //   throw new NotFoundException(`Proyecto con id ${id} no encontrado`);
    // return proyectos;
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Id ${id} no valido`);
    }
    const proyecto = await this.proyectoModel.findOne({ _id: id });
    if (!proyecto) {
      throw new NotFoundException(`Proyecto con id ${id} no encontrado`);
    }
    return proyecto;
  }

  async create(createProyectDto: CreateProyectDto) {
    try {
      const proyecto = await this.proyectoModel.create(createProyectDto);
      return proyecto;
    } catch (error) {
      console.error(error);
      if (error.code === 11000) {
        throw new BadRequestException(
          'Nombre de proyecto ya utilizado, por favor utilice otro nombre!',
        );
      }

      throw new InternalServerErrorException(
        `Error al crear el proyecto - revisar logs del serivdor`,
      );
    }
  }

  async update(id: string, updatePokemonDto: UpdateProyectDto) {
    const proyecto = await this.findOneById(id);

    const updateProyecto = await proyecto.updateOne(updatePokemonDto, {
      new: true,
    });
    return updateProyecto;
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
