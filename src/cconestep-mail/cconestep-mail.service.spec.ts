import { Test, TestingModule } from '@nestjs/testing';
import { CconestepMailService } from './cconestep-mail.service';

describe('CconestepMailService', () => {
  let service: CconestepMailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CconestepMailService],
    }).compile();

    service = module.get<CconestepMailService>(CconestepMailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
