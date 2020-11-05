import { Test, TestingModule } from '@nestjs/testing';
import { BillPhoneController } from './bill-phone.controller';

describe('BillPhoneController', () => {
  let controller: BillPhoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillPhoneController],
    }).compile();

    controller = module.get<BillPhoneController>(BillPhoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
