import { Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService } from './Services/app.service';
import { MovimentacaoController } from './Controllers/movimentacaoController';
import { DepartamentoController } from './Controllers/departamentoController';
import { FuncionarioController } from './Controllers/funcionarioController';
import { MovimentacaoService } from './Services/movimentacaoService';
import { FuncionarioService } from './Services/funcionarioService';
import { DepartamentoService } from './Services/departamentoService';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController, MovimentacaoController, DepartamentoController, FuncionarioController],
  providers: [AppService, MovimentacaoService, FuncionarioService, DepartamentoService],
})
export class AppModule {}
