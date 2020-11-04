import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CatsModule} from './cats/cats.module';
import {CconestepMailModule} from './cconestep-mail/cconestep-mail.module';
import {MongooseModule} from "@nestjs/mongoose"

@Module({
    imports:
        [
            CatsModule,
            CconestepMailModule,
            MongooseModule.forRoot('mongodb://127.0.0.1:27017/cconestepBackend'),
        ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
