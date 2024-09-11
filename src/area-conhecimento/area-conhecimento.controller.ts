import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AreaConhecimentoService } from './area-conhecimento.service';
import { CreateAreaConhecimentoDto } from './create-area-conhecimento.dto';
import { UpdateAreaConhecimentoDto } from './update-area-conhecimento.dto';

@Controller('area-conhecimento')
export class AreaConhecimentoController {
  constructor(private readonly areaConhecimentoService: AreaConhecimentoService) {}

  @Get()
  findAll() {
    return this.areaConhecimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.areaConhecimentoService.findOne(id);
  }

  @Post()
  create(@Body() createAreaConhecimentoDto: CreateAreaConhecimentoDto) {
    return this.areaConhecimentoService.create(createAreaConhecimentoDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateAreaConhecimentoDto: UpdateAreaConhecimentoDto) {
    return this.areaConhecimentoService.update(id, updateAreaConhecimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.areaConhecimentoService.remove(id);
  }
}
