
import { Departamento } from 'src/departamento/model/entity/departamento.entity';
import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 200 })
  Nome: string;

  @ManyToOne(type => Departamento, departamento => departamento.funcionarios) 
   departamento: Departamento
}