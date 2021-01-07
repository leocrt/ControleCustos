import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionario } from 'src/funcionario/model/entities/funcionario.entity';
import { MovimentacaoController } from './controller/movimentacao.controller';
import { Movimentacao } from './model/entity/movimentacao.entity';
import { MovimentacaoService } from './service/movimentacao.service';
@Module({
  imports: [TypeOrmModule.forFeature([Funcionario, Movimentacao])],
  controllers: [MovimentacaoController],
  providers: [MovimentacaoService],
})
export class MovimentacaoModule {}
