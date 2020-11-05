import { Test, TestingModule } from '@nestjs/testing';
import { KaiyaoEmailService } from './kaiyao-email.service';

describe('KaiyaoEmailService', () => {
  let service: KaiyaoEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KaiyaoEmailService],
    }).compile();

    service = module.get<KaiyaoEmailService>(KaiyaoEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
