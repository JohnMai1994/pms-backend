import { Test, TestingModule } from '@nestjs/testing';
import { KaiyaoEmailController } from './kaiyao-email.controller';

describe('KaiyaoEmailController', () => {
  let controller: KaiyaoEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KaiyaoEmailController],
    }).compile();

    controller = module.get<KaiyaoEmailController>(KaiyaoEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
