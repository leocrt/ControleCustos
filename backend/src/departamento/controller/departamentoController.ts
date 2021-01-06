import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Departamento } from '../model/entity/departamento.entity';
import { DepartamentoType } from '../model/type/departamento';
import { DepartamentoService } from '../service/departamentoService';

@Controller('api/departamento')
export class DepartamentoController {
  constructor(private readonly depService: DepartamentoService) {}

  @Post()
  create(@Body() departamento: DepartamentoType): Promise<Departamento> {
    return this.depService.create(departamento);
  }

  @Get()
  findAll(): Promise<Departamento[]> {
    return this.depService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Departamento> {
    return this.depService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.depService.remove(id);
  }
}