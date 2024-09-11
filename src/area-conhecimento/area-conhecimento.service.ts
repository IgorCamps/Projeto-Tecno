import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AreaConhecimento } from './area-conhecimento.entity';
import { CreateAreaConhecimentoDto } from './create-area-conhecimento.dto';
import { UpdateAreaConhecimentoDto } from './update-area-conhecimento.dto';

@Injectable()
export class AreaConhecimentoService {
  constructor(
    @InjectRepository(AreaConhecimento)
    private readonly areaConhecimentoRepository: Repository<AreaConhecimento>,
  ) {}

  findAll(): Promise<AreaConhecimento[]> {
    return this.areaConhecimentoRepository.find();
  }

  findOne(id: number): Promise<AreaConhecimento> {
    return this.areaConhecimentoRepository.findOneBy({ id });
  }

  create(createAreaConhecimentoDto: CreateAreaConhecimentoDto): Promise<AreaConhecimento> {
    const areaConhecimento = this.areaConhecimentoRepository.create(createAreaConhecimentoDto);
    return this.areaConhecimentoRepository.save(areaConhecimento);
  }

  async update(id: number, updateAreaConhecimentoDto: UpdateAreaConhecimentoDto): Promise<AreaConhecimento> {
    await this.areaConhecimentoRepository.update(id, updateAreaConhecimentoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.areaConhecimentoRepository.delete(id);
  }
}
