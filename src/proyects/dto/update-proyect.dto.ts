import { IsString, IsArray, IsUUID, IsOptional } from 'class-validator';

export class UpdateProyectDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsString()
  @IsOptional()
  readonly description?: string;

  @IsString()
  @IsOptional()
  readonly date?: string;

  @IsString()
  @IsOptional()
  readonly status?: string;

  @IsString()
  @IsOptional()
  readonly priority?: string;

  @IsString()
  @IsOptional()
  readonly responsable?: string;

  @IsArray()
  @IsOptional()
  readonly tasks?: string[];
}
