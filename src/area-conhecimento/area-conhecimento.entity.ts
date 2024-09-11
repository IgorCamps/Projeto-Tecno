import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Conhecimento } from '../conhecimento/conhecimento.entity';

@Entity()
export class AreaConhecimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Conhecimento, conhecimento => conhecimento.areaConhecimento)
  conhecimentos: Conhecimento[];
}
