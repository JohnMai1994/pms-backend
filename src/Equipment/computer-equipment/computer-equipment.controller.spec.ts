import { Test, TestingModule } from '@nestjs/testing';
import { ComputerEquipmentController } from './computer-equipment.controller';

describe('ComputerEquipmentController', () => {
  let controller: ComputerEquipmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComputerEquipmentController],
    }).compile();

    controller = module.get<ComputerEquipmentController>(ComputerEquipmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
