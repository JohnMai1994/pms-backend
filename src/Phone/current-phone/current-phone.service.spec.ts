import { Test, TestingModule } from '@nestjs/testing';
import { CurrentPhoneService } from './current-phone.service';

describe('CurrentPhoneService', () => {
  let service: CurrentPhoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrentPhoneService],
    }).compile();

    service = module.get<CurrentPhoneService>(CurrentPhoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
