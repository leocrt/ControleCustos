import { IsNumber, IsString } from 'class-validator';

export class MovimentacaoDTO{
    @IsString()
    descricao: string;
    @IsNumber()
    valor?: number
    @IsNumber()
    funcionarioId?: number
}