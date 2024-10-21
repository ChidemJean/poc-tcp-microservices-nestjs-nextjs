import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

console.log('arguments: ' + process.argv);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
  console.log("===================================================");
  console.log('Servidor HTTP rodando na porta 3000');
  console.log("===================================================");
}
bootstrap();