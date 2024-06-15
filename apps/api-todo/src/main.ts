/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const cfg = app.get(ConfigService);

  const appName = cfg.getOrThrow('appName');
  const appVersion = cfg.getOrThrow('appVersion');
  const appDescription = cfg.getOrThrow('appDescription');
  const globalPrefix = cfg.getOrThrow('globalPrefix');
  const host = cfg.getOrThrow('host');
  const port = cfg.getOrThrow('port');
  const swaggerPath = cfg.getOrThrow('swaggerPath');

  app.setGlobalPrefix(globalPrefix);
  app.enableCors({ origin: '*' });

  const docConfig = new DocumentBuilder()
    .setTitle(appName)
    .setDescription(appDescription)
    .setVersion(appVersion)
    .addTag(appName)
    .build();

  const document = SwaggerModule.createDocument(app, docConfig);

  SwaggerModule.setup(swaggerPath, app, document);

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://${host}:${port}/${globalPrefix}`
  );
}

bootstrap();
