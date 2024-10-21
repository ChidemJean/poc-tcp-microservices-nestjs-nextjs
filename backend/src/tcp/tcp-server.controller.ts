import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { TcpClientService } from './tcp-client.service';

@Controller()
export class TcpServerController {
  constructor(private readonly tcpClientService: TcpClientService) {}

  @EventPattern('data.receive')
  async handleNewDataReceive(@Payload() data: Record<string, unknown>) {
    console.log('Evento recebido no servidor:', data);

    const pattern = 'data.receive';
    const dataToBFF = { message: 'Eae, aqui é o backend!' };

    await this.tcpClientService.emitEvent(pattern, dataToBFF).toPromise();

    return { message: 'Evento enviado!' };
  }

}