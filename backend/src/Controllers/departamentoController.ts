import { Controller, Get } from '@nestjs/common';
import { Departamento } from 'src/Models/departamento';
import { DepartamentoService } from 'src/Services/departamentoService';

@Controller('api/departamento')
export class DepartamentoController {
  constructor(private readonly depService: DepartamentoService) {}

  @Get()
  getDepartamento(): Departamento {
    return this.depService.getDepartamento();
  }
}
