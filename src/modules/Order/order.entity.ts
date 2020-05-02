import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Order {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column()
  user_id: number;

  @ApiModelProperty()
  @Column()
  menu_id: number;

  @ApiModelProperty()
  @Column()
  numhouse: number;

  @ApiModelProperty()
  @Column()
  nummoo: number;

  @ApiModelProperty()
  @Column()
  road: string;

  @ApiModelProperty()
  @Column()
  tambon: string;

  @ApiModelProperty()
  @Column()
  amphoe: string;

  @ApiModelProperty()
  @Column()
  changwat: string;

  @ApiModelProperty()
  @Column()
  payment: string;

  @ApiModelProperty()
  @Column({ default: 1 })
  status: string;

  @ApiModelProperty()
  @Column({ default: false })
  isDisable: boolean;

  @ApiModelProperty()
  @CreateDateColumn()
  created: Date;

  @ApiModelProperty()
  @UpdateDateColumn()
  update: Date;
}
