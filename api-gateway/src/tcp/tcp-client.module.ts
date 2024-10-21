import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TcpClientController } from './tcp-client.controller';
import { TcpClientService } from './tcp-client.service';

@Module({
  imports: [],
  controllers: [
    TcpClientController
  ],
  providers: [TcpClientService],
})
export class TcpClientModule {}
