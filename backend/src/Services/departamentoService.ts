import { Injectable } from '@nestjs/common';
import { Departamento } from 'src/Models/departamento';

@Injectable()
export class DepartamentoService {
  getDepartamento(): Departamento {
    return {nome: "Compras e Marketing"};
  }
}
