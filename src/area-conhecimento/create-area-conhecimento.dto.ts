import { IsNotEmpty } from 'class-validator';

export class CreateAreaConhecimentoDto {
  @IsNotEmpty()
  nome: string;
}
