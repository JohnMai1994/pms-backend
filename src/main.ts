import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from "@nestjs/swagger"


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
      .setTitle("信息管理系统后端API汇总")
      .setDescription("后端API端口描述")
      .setVersion("1.0")
      .build()

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app,document);


  await app.listen(3000);
}
bootstrap();
