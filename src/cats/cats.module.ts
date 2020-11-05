import {Module} from '@nestjs/common';
import {CatsService} from './cats.service';
import {CatsController} from './cats.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {CatScheme} from './cats.schema';


@Module({
    // add
    imports: [MongooseModule.forFeature(
        [{name: "Cat", schema: CatScheme}]
    )],

    providers: [CatsService],
    controllers: [CatsController],


})
export class CatsModule {
}
