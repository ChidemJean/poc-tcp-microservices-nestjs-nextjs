import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TcpClientModule } from './tcp/tcp-client.module';

@Module({
  imports: [TcpClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
