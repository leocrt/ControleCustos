import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartamentoType } from 'src/departamento/model/type/departamento';
import { Repository } from 'typeorm';
import { Departamento } from '../model/entity/departamento.entity';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private departamentoRepository: Repository<Departamento>,
  ){}

  create(departamentoDto: DepartamentoType): Promise<Departamento> {
    const departamento = new Departamento();
    departamento.nome = departamentoDto.nome
    return this.departamentoRepository.save(departamento);
  }

  findAll(): Promise<Departamento[]> {
    return this.departamentoRepository.find();
  }

  findOne(id: number): Promise<Departamento> {
    return this.departamentoRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.departamentoRepository.delete(id);
  }
}
