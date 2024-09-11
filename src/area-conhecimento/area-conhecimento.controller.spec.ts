import { Test, TestingModule } from '@nestjs/testing';
import { AreaConhecimentoController } from './area-conhecimento.controller';

describe('AreaConhecimentoController', () => {
  let controller: AreaConhecimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AreaConhecimentoController],
    }).compile();

    controller = module.get<AreaConhecimentoController>(AreaConhecimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
