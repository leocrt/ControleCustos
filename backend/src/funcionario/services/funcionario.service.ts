import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { type } from 'os';
import { Departamento } from 'src/departamento/model/entity/departamento.entity';
import { Funcionario } from 'src/funcionario/model/entities/funcionario.entity';
import { Repository } from 'typeorm';
import { FuncionarioDTO } from '../model/DTO/funcionario.dto';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
    @InjectRepository(Departamento)
    private departamentoRepository: Repository<Departamento>,
  ){}

  async create(funcionarioDto: FuncionarioDTO): Promise<Funcionario> {
    
    if(funcionarioDto.nome.length > 200){
      throw new HttpException('Nome do funcionario não pode exceder 200 caracteres', HttpStatus.BAD_REQUEST);
    }

    let departamentos: Departamento[]
    await this.departamentoRepository
                          .createQueryBuilder("departamento")
                          .where("departamento.id IN (:...ids)", {ids: funcionarioDto.departamentosIds})
                          .getMany().then(result => departamentos = result);
  
    const funcionario = new Funcionario();
    funcionario.nome = funcionarioDto.nome;
    funcionario.departamentos = departamentos;

    await this.funcionarioRepository.save(funcionario);

    return funcionario
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

  async findAllFuncionariosByDepartamento(depId: number): Promise<Funcionario[]> {
    const list = await this.funcionarioRepository
                    .createQueryBuilder("funcionario")
                    .innerJoinAndSelect("funcionario.departamentos", "departamento")
                    .where("departamento.id = :id", {id: depId})
                    .getMany();
    return list;
  }
}
