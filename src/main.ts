import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  await app.listen(3000, () => {
    console.log(`
🚀 Server ready at: http://localhost:3000/graphql
⭐️ See sample queries: http://pris.ly/e/ts/graphql-nestjs#using-the-graphql-api
`);
  });
}
bootstrap();
