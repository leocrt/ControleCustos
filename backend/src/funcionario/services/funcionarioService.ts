import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departamento } from 'src/departamento/model/entity/departamento.entity';
import { Funcionario } from 'src/funcionario/model/entities/funcionario.entity';
import { Repository } from 'typeorm';
import { FuncionarioType } from '../model/type/funcionario';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
    @InjectRepository(Departamento)
    private departamentoRepository: Repository<Departamento>,
  ){}

  create(funcionarioDto: FuncionarioType): Promise<Funcionario> {
    const funcionario = new Funcionario();
    funcionario.Nome = funcionarioDto.nome
    return this.funcionarioRepository.save(funcionario);
  }

  findAll(): Promise<Funcionario[]> {
    return this.funcionarioRepository.find();
  }

  findOne(id: number): Promise<Funcionario> {
    return this.funcionarioRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.funcionarioRepository.delete(id);
  }
}
