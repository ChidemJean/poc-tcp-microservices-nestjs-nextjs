import { Body, Controller, Post } from '@nestjs/common';
import { TcpClientService } from './tcp-client.service';
import { NewDataDto } from 'src/dto/new-data.dto';

@Controller('api')
export class TcpClientController {
  constructor(private readonly tcpClientService: TcpClientService) {}

  @Post('new-data')
  async emitEvent(
    @Body() newData: NewDataDto
  ) {
    console.log(newData);
    const pattern = 'data.receive';
    const data = { message: `Evento disparado pela api gateway: ${newData.name}` };

    await this.tcpClientService.emitEvent(pattern, data).toPromise();

    return { message: 'Evento enviado!' };
  }
}
