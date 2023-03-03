import { Test, TestingModule } from '@nestjs/testing';
import { EgarageService } from './egarage.service';

describe('EgarageService', () => {
  let service: EgarageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EgarageService],
    }).compile();

    service = module.get<EgarageService>(EgarageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
