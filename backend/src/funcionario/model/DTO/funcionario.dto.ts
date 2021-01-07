import { IsString } from 'class-validator';

export class FuncionarioDTO{
    @IsString()
    nome: string;
    departamentosIds?: number[] 
}