import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {SwaggerModule, DocumentBuilder} from "@nestjs/swagger"


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
        next();
    })

    const options = new DocumentBuilder()
        .setTitle("信息管理系统后端API汇总")
        .setDescription("后端API端口描述")
        .setVersion("1.0")
        .build()

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs', app, document);


    await app.listen(3000);
}

bootstrap();
