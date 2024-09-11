import { Test, TestingModule } from '@nestjs/testing';
import { ConhecimentoService } from './conhecimento.service';

describe('ConhecimentoService', () => {
  let service: ConhecimentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConhecimentoService],
    }).compile();

    service = module.get<ConhecimentoService>(ConhecimentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
