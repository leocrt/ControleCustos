import { Injectable } from '@nestjs/common';
import { Funcionario } from 'src/Models/funcionario';

@Injectable()
export class FuncionarioService {
  getFuncionario(): Funcionario {
    return {nome: "Leonardo", departamento: "Compras"};
  }
}
