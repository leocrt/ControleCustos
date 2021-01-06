import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentoModule } from './departamento/departamento.module';
import { FuncionarioModule } from './funcionario/funcionario.module';

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
  ],
})
export class AppModule {}
