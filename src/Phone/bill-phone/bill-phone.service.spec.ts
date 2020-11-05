import { Test, TestingModule } from '@nestjs/testing';
import { BillPhoneService } from './bill-phone.service';

describe('BillPhoneService', () => {
  let service: BillPhoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillPhoneService],
    }).compile();

    service = module.get<BillPhoneService>(BillPhoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
