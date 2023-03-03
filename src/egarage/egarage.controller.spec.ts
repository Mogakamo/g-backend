import { Test, TestingModule } from '@nestjs/testing';
import { EgarageController } from './egarage.controller';

describe('EgarageController', () => {
  let controller: EgarageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EgarageController],
    }).compile();

    controller = module.get<EgarageController>(EgarageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
