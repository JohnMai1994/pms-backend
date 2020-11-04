import { Test, TestingModule } from '@nestjs/testing';
import { CconestepMailController } from './cconestep-mail.controller';

describe('CconestepMailController', () => {
  let controller: CconestepMailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CconestepMailController],
    }).compile();

    controller = module.get<CconestepMailController>(CconestepMailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
