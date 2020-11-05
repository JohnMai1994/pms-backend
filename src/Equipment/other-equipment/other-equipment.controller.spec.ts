import { Test, TestingModule } from '@nestjs/testing';
import { OtherEquipmentController } from './other-equipment.controller';

describe('OtherEquipmentController', () => {
  let controller: OtherEquipmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OtherEquipmentController],
    }).compile();

    controller = module.get<OtherEquipmentController>(OtherEquipmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
