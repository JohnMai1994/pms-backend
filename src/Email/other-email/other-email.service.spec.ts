import { Test, TestingModule } from '@nestjs/testing';
import { OtherEmailService } from './other-email.service';

describe('OtherEmailService', () => {
  let service: OtherEmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtherEmailService],
    }).compile();

    service = module.get<OtherEmailService>(OtherEmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
