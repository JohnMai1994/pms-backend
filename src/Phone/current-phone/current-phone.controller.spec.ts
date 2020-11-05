import { Test, TestingModule } from '@nestjs/testing';
import { CurrentPhoneController } from './current-phone.controller';

describe('CurrentPhoneController', () => {
  let controller: CurrentPhoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrentPhoneController],
    }).compile();

    controller = module.get<CurrentPhoneController>(CurrentPhoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
