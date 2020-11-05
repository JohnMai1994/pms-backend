import { Test, TestingModule } from '@nestjs/testing';
import { PasswordPhoneController } from './password-phone.controller';

describe('PasswordPhoneController', () => {
  let controller: PasswordPhoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasswordPhoneController],
    }).compile();

    controller = module.get<PasswordPhoneController>(PasswordPhoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
