import { Test, TestingModule } from '@nestjs/testing';
import { CconestepEmailController } from './cconestep-email.controller';

describe('CconestepEmailController', () => {
  let controller: CconestepEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CconestepEmailController],
    }).compile();

    controller = module.get<CconestepEmailController>(CconestepEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
