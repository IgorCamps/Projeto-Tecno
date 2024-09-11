import { Test, TestingModule } from '@nestjs/testing';
import { ConhecimentoController } from './conhecimento.controller';

describe('ConhecimentoController', () => {
  let controller: ConhecimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConhecimentoController],
    }).compile();

    controller = module.get<ConhecimentoController>(ConhecimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
