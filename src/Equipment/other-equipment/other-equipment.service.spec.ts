import { Test, TestingModule } from '@nestjs/testing';
import { OtherEquipmentService } from './other-equipment.service';

describe('OtherEquipmentService', () => {
  let service: OtherEquipmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtherEquipmentService],
    }).compile();

    service = module.get<OtherEquipmentService>(OtherEquipmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
