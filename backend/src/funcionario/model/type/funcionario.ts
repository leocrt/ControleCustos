import { IsString } from 'class-validator'
import { Departamento } from 'src/departamento/model/entity/departamento.entity';
import { DepartamentoType } from 'src/departamento/model/type/departamento';

export class FuncionarioType{
    @IsString()
    nome: string;
    departamentos?: DepartamentoType[] 
}