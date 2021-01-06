import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departamento } from 'src/departamento/model/entity/departamento.entity';
import { FuncionarioController } from 'src/funcionario/controller/funcionarioController';
import { Funcionario } from 'src/funcionario/model/entities/funcionario.entity';
import { FuncionarioService } from 'src/funcionario/services/funcionarioService';
@Module({
  imports: [TypeOrmModule.forFeature([Funcionario, Departamento])],
  controllers: [FuncionarioController],
  providers: [FuncionarioService],
})
export class FuncionarioModule {}
