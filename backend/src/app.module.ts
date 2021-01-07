import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentoModule } from './departamento/departamento.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { MovimentacaoModule } from './movimentacao/movimentacao.module';
import { HttpErrorFilter } from './shared/http.error.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "db",
      "port": 5432,
      "username": "postgres",
      "password": "postgres",
      "database": "composetest",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
    }),
    FuncionarioModule,
    DepartamentoModule,
    MovimentacaoModule
  ],
  providers:[
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ]
})
export class AppModule {}
