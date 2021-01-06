
import { Departamento } from 'src/departamento/model/entity/departamento.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 200 })
  nome: string;

  @ManyToMany(() => Departamento)
  @JoinTable() 
  departamentos: Departamento[];
}