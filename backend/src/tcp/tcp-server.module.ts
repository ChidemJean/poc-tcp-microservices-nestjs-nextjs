import { Module } from '@nestjs/common';
import { TcpServerController } from './tcp-server.controller';
import { TcpClientService } from './tcp-client.service';

@Module({
  imports: [],
  controllers: [TcpServerController],
  providers: [TcpClientService],
})
export class TcpServerModule {}
