import { Test, TestingModule } from '@nestjs/testing';
import { PasswordPhoneService } from './password-phone.service';

describe('PasswordPhoneService', () => {
  let service: PasswordPhoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordPhoneService],
    }).compile();

    service = module.get<PasswordPhoneService>(PasswordPhoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
