import { IsNotEmpty } from 'class-validator';

export class UpdateAreaConhecimentoDto {
  @IsNotEmpty()
  nome: string;
}
