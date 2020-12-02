import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import './db'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('confession', { prefix: '/confession/' });
  app.useStaticAssets('public');
  await app.listen(3000);
}
bootstrap();
