import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departamento } from 'src/departamento/model/entity/departamento.entity';
import { Funcionario } from 'src/funcionario/model/entities/funcionario.entity';
import { Repository } from 'typeorm';
import { MovimentacaoDTO } from '../model/DTO/movimentacao.dto';
import { Movimentacao } from '../model/entity/movimentacao.entity';

@Injectable()
export class MovimentacaoService {
  constructor(
    @InjectRepository(Movimentacao)
    private movimentacaoRepository: Repository<Movimentacao>,
    @InjectRepository(Funcionario)
    private funcionarioRepository: Repository<Funcionario>,
  ){}

  async create(movimentacaoDto: MovimentacaoDTO): Promise<Movimentacao> {
    
    if(movimentacaoDto.descricao.length > 500){
      throw new HttpException('Descrição da movimentação não pode exceder 500 caracteres', HttpStatus.BAD_REQUEST);
    }

    let funcionario: Funcionario
    await this.funcionarioRepository.findOne(movimentacaoDto.funcionarioId).then(result => funcionario = result);
    if(!funcionario){
      throw new HttpException('O funcionário especificado não foi encontrado', HttpStatus.BAD_REQUEST)
    }
    
    const movimentacao = new Movimentacao();
    movimentacao.descricao = movimentacaoDto.descricao;
    movimentacao.valor = movimentacaoDto.valor;
    movimentacao.funcionarioId = movimentacaoDto.funcionarioId

    await this.movimentacaoRepository.save(movimentacao);

    return movimentacao
  }

  findAll(): Promise<Movimentacao[]> {
    return this.movimentacaoRepository.find();
  }

  async findOne(id: number): Promise<Movimentacao> {
    const movimentacao = await this.movimentacaoRepository.findOne(id);
    if(!movimentacao){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }
    return movimentacao
  }

  async remove(id: number): Promise<void> {
    const movimentacao = await this.movimentacaoRepository.findOne(id);
    if(!movimentacao){
      throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }
    await this.movimentacaoRepository.delete(id);
  }

  async findAllMovimentacoesByFuncionario(funcId: number): Promise<Movimentacao[]> {
    const list = await this.movimentacaoRepository
                    .createQueryBuilder("movimentacao")
                    .innerJoinAndSelect("movimentacao.funcionarios", "funcionario")
                    .where("funcionario.id = :id", {id: funcId})
                    .getMany();
    return list;
  }
}
