import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = parseInt(process.env.TCP_PORT) ?? 4000;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule, 
    {
      transport: Transport.TCP,
      options: {
        host: process.env.TCP_HOST ?? '127.0.0.1',
        port: port, 
      },
    }
  );

  await app.listen();

  console.log("===================================================")
  console.log(`Servidor TCP rodando na porta ${port}`);
  console.log("===================================================")
}
bootstrap();