import { Test, TestingModule } from '@nestjs/testing';
import { CasedepEmailService } from './casedep-email.service';

describe('CasedepEmailService', () => {
  let service: CasedepEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CasedepEmailService],
    }).compile();

    service = module.get<CasedepEmailService>(CasedepEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
