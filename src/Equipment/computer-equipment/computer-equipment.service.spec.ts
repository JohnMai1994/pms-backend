import { Test, TestingModule } from '@nestjs/testing';
import { ComputerEquipmentService } from './computer-equipment.service';

describe('ComputerEquipmentService', () => {
  let service: ComputerEquipmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComputerEquipmentService],
    }).compile();

    service = module.get<ComputerEquipmentService>(ComputerEquipmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
