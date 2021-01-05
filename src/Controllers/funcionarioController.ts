import { Controller, Get } from '@nestjs/common';
import { Funcionario } from 'src/Models/funcionario';
import { FuncionarioService } from 'src/Services/funcionarioService';

@Controller('api/funcionario')
export class FuncionarioController {
  constructor(private readonly funcService: FuncionarioService) {}

  @Get()
  getFuncionario(): Funcionario {
    return this.funcService.getFuncionario();
  }
}
