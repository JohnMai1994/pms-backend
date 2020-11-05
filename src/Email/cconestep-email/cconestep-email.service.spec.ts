import { Test, TestingModule } from '@nestjs/testing';
import { CconestepEmailService } from './cconestep-email.service';

describe('CconestepEmailService', () => {
  let service: CconestepEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CconestepEmailService],
    }).compile();

    service = module.get<CconestepEmailService>(CconestepEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
