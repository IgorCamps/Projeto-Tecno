import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conhecimento } from './conhecimento.entity';

@Injectable()
export class ConhecimentoService {
  constructor(
    @InjectRepository(Conhecimento)
    private readonly conhecimentoRepository: Repository<Conhecimento>,
  ) {}

  findAll(): Promise<Conhecimento[]> {
    return this.conhecimentoRepository.find({ relations: ['areaConhecimento'] });
  }

  findOne(id: number): Promise<Conhecimento> {
    return this.conhecimentoRepository.findOne({
      where: { id }, 
      relations: ['areaConhecimento'], 
    });
  }
  

  create(conhecimento: Conhecimento): Promise<Conhecimento> {
    return this.conhecimentoRepository.save(conhecimento);
  }

  async remove(id: number): Promise<void> {
    await this.conhecimentoRepository.delete(id);
  }
}
