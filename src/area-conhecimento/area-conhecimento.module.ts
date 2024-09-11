import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaConhecimentoController } from './area-conhecimento.controller';
import { AreaConhecimentoService } from './area-conhecimento.service';
import { AreaConhecimento } from './area-conhecimento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AreaConhecimento])],
  controllers: [AreaConhecimentoController],
  providers: [AreaConhecimentoService],
})
export class AreaConhecimentoModule {}
