import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departamento } from 'src/departamento/model/entity/departamento.entity';
import { DepartamentoController } from './controller/departamentoController';
import { DepartamentoService } from './service/departamentoService';
@Module({
  imports: [TypeOrmModule.forFeature([Departamento])],
  controllers: [DepartamentoController],
  providers: [DepartamentoService],
})
export class DepartamentoModule {}