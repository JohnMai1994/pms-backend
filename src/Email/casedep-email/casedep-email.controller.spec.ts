import { Test, TestingModule } from '@nestjs/testing';
import { CasedepEmailController } from './casedep-email.controller';

describe('CasedepEmailController', () => {
  let controller: CasedepEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CasedepEmailController],
    }).compile();

    controller = module.get<CasedepEmailController>(CasedepEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
