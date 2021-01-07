
import { Funcionario } from 'src/funcionario/model/entities/funcionario.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movimentacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 200 })
  descricao: string;

  @Column("decimal", { precision: 15, scale:2 })
  valor: number;

  @Column("integer")
  funcionarioId: number;
}