import { IsString } from 'class-validator'

export class FuncionarioType{
    @IsString()
    nome: string;
    @IsString()
    departamento: string;
}