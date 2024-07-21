import { IsString, IsArray } from 'class-validator';

export class CreateProyectDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly date: string;

  @IsString()
  readonly status: string;

  @IsString()
  readonly priority: string;

  @IsString()
  readonly responsable: string;

  @IsArray()
  readonly tasks: string[];
}
