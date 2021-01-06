import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Funcionario } from '../model/entities/funcionario.entity';
import { FuncionarioType } from '../model/type/funcionario';
import { FuncionarioService } from '../services/funcionarioService';

@Controller('api/funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Post()
  create(@Body() funcionarioType: FuncionarioType): Promise<Funcionario> {
    return this.funcionarioService.create(funcionarioType);
  }

  @Get()
  findAll(): Promise<Funcionario[]> {
    return this.funcionarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Funcionario> {
    return this.funcionarioService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.funcionarioService.remove(id);
  }
}