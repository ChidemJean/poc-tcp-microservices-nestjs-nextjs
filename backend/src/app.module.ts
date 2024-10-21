import { Module } from '@nestjs/common';
import { TcpServerModule } from './tcp/tcp-server.module';

@Module({
  imports: [TcpServerModule],
  controllers: [],
  providers: []
})
export class AppModule {}
