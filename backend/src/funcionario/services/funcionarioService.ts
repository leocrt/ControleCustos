import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    if(funcionarioDto.nome.length > 200){
      throw new HttpException('Nome do funcionario não pode exceder 200 caracteres', HttpStatus.BAD_REQUEST);
    }
    const funcionario = new Funcionario();
    funcionario.Nome = funcionarioDto.nome;
    return this.funcionarioRepository.save(funcionario);
  }

  findAll(): Promise<Funcionario[]> {
    return this.funcionarioRepository.find();
  }

  async findOne(id: number): Promise<Funcionario> {
    const funcionario = await this.funcionarioRepository.findOne(id);
    if(!funcionario){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }
    return funcionario
  }

  async remove(id: number): Promise<void> {
    const funcionario = await this.funcionarioRepository.findOne(id);
    if(!funcionario){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }
    await this.funcionarioRepository.delete(id);
  }
}
