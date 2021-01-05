import { Injectable } from '@nestjs/common';

@Injectable()
export class MovimentacaoService {
  getHello(): string {
    return 'Hello World! do service de movimentação';
  }
}
