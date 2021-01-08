import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MovimentacaoService } from 'src/movimentacao/service/movimentacao.service';
import { MovimentacaoDTO } from '../model/DTO/movimentacao.dto';
import { Movimentacao } from '../model/entity/movimentacao.entity';

@Controller('api/movimentacao')
export class MovimentacaoController {
  constructor(private readonly movService: MovimentacaoService) {}

  @Post()
  @UsePipes(new ValidationPipe)
  create(@Body() movimentacao: MovimentacaoDTO): Promise<Movimentacao> {
    return this.movService.create(movimentacao);
  }

  @Get()
  findAll(): Promise<Movimentacao[]> {
    return this.movService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Movimentacao> {
    return this.movService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.movService.remove(id);
  }

  @Get('byFuncionario/:id')
  findMovimentacoesByIdFuncionario(@Param('id') id: number): Promise<Movimentacao[]> {
    return this.movService.findAllMovimentacoesByFuncionario(id);
  }

  @Get('descricao/:descricao')
  findMovimentacoesByDescricao(@Param('descricao') descricao: string): Promise<Movimentacao[]> {
    return this.movService.findAllMovimentacoesByDescricao(descricao);
  }
}
