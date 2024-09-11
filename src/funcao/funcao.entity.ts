import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Conhecimento } from '../conhecimento/conhecimento.entity';

@Entity()
export class Funcao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToMany(() => Conhecimento)
  @JoinTable()
  conhecimentos: Conhecimento[];
}
