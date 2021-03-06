import { Funcionario } from 'src/funcionario/model/entities/funcionario.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Departamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 100 })
  nome: string;
}