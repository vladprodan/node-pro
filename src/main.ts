import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<string>('PORT') || '3000';
  const env = configService.get<string>('NODE_ENV');

  console.log(`Application running in ${env} mode on port ${port}`);

  await app.listen(port);
}
bootstrap();
