import { Controller, Get } from '@nestjs/common';
import { MovimentacaoService } from 'src/Services/movimentacaoService';
import { AppService } from '../Services/app.service';

@Controller('api/movimentacao')
export class MovimentacaoController {
  constructor(private readonly movService: MovimentacaoService) {}

  @Get()
  getHello(): string {
    return this.movService.getHello();
  }
}
