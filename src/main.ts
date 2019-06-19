import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as BodyParser from 'body-parser';
import * as express from 'express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.setGlobalPrefix('api')
  await app.use(BodyParser.json({ limit: '200mb' }));
  // await app.use('/upload', express.static(__dirname + '/../upload'));
  await app.use(BodyParser.urlencoded({ extended: true }));
  await app.use(express.static('public'));
  await app.enableCors();
  const options = await new DocumentBuilder()
    .setTitle('api')
    .setBasePath('api')
    .setDescription('z api')
    .setVersion('0.0.1')
    .build();

  const docs = await SwaggerModule.createDocument(app, options);
  await SwaggerModule.setup('/api/docs', app, docs);
  await app.listen(3001);
}
bootstrap();



 