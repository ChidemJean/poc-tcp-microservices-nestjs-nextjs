import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

console.log('arguments: ' + process.argv);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.HTTP_PORT) ?? 8080;
  await app.listen(port);
  console.log("===================================================");
  console.log(`Servidor HTTP rodando na porta ${port}`);
  console.log("===================================================");
}
bootstrap();