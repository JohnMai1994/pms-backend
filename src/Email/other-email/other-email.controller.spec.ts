import { Test, TestingModule } from '@nestjs/testing';
import { OtherEmailController } from './other-email.controller';

describe('OtherEmailController', () => {
  let controller: OtherEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OtherEmailController],
    }).compile();

    controller = module.get<OtherEmailController>(OtherEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
