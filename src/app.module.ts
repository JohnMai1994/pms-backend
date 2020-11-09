import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CatsModule} from './cats/cats.module';
import {MongooseModule} from "@nestjs/mongoose"
import {CconestepEmailModule} from './Email/cconestep-email/cconestep-email.module';
import {KaiyaoEmailModule} from './Email/kaiyao-email/kaiyao-email.module';
import {CasedepEmailModule} from './Email/casedep-email/casedep-email.module';
import {OtherEmailModule} from './Email/other-email/other-email.module';
import {BillPhoneModule} from './Phone/bill-phone/bill-phone.module';
import {CurrentPhoneModule} from './Phone/current-phone/current-phone.module';
import {PasswordPhoneModule} from './Phone/password-phone/password-phone.module';
import {ComputerEquipmentModule} from './Equipment/computer-equipment/computer-equipment.module';
import {OtherEquipmentModule} from './Equipment/other-equipment/other-equipment.module';
import {UserLoginModule} from "./UserLogin/user-login.module"

@Module({
    imports:
        [
            CatsModule,
            CconestepEmailModule,
            KaiyaoEmailModule,
            CasedepEmailModule,
            OtherEmailModule,
            BillPhoneModule,
            CurrentPhoneModule,
            PasswordPhoneModule,
            ComputerEquipmentModule,
            OtherEquipmentModule,
            UserLoginModule,
            MongooseModule.forRoot('mongodb://127.0.0.1:27017/cconestepBackend'),
        ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
