import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AreaConhecimento } from '../area-conhecimento/area-conhecimento.entity';

@Entity()
export class Conhecimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => AreaConhecimento, area => area.conhecimentos)
  areaConhecimento: AreaConhecimento;
}
