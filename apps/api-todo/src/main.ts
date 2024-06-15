/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { RequestHandler } from '@nestjs/common/interfaces';
import { Middlewares } from './main.middleware';
import { configureSwagger } from './main.swagger';

async function bootstrap(middlewares: RequestHandler[]) {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const cfg = (key: string) => configService.getOrThrow(key);

  const APP_NAME = cfg('APP_NAME');
  const APP_VERSION = cfg('APP_VERSION');
  const APP_DESCRIPTION = cfg('APP_DESCRIPTION');

  const GLOBAL_PREFIX = cfg('GLOBAL_PREFIX');
  const HOST = cfg('HOST');
  const PORT = cfg('PORT');

  configureSwagger(app, {
    info: {
      title: APP_NAME,
      description: APP_DESCRIPTION,
      version: APP_VERSION,
    },
    tags: [APP_NAME, 'API'],
  });

  app.setGlobalPrefix(GLOBAL_PREFIX);
  app.use(middlewares);
  app.enableCors({ origin: '*' });

  await app.listen(PORT);

  Logger.log(
    `🚀 Application is running on: http://${HOST}:${PORT}/${GLOBAL_PREFIX}`
  );
}

bootstrap(Middlewares);
