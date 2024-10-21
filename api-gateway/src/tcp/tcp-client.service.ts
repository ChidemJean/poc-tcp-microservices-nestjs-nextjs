import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class TcpClientService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: process.env.TCP_SERVER_HOST ?? 'localhost',
        port: parseInt(process.env.TCP_SERVER_PORT) ?? 4000
      },
    });
  }

  emitEvent(pattern: string, data: any) {
    return this.client.emit(pattern, data);
  }
}
