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
  @Column({ default: false })
  isDisable: boolean;

  @ApiModelProperty()
  @CreateDateColumn()
  created: Date;

  @ApiModelProperty()
  @UpdateDateColumn()
  update: Date;

  @ApiModelProperty()
  @Column()
  user_id: number;

  @ApiModelProperty()
  @Column()
  numhouse: number;

  @ApiModelProperty()
  @Column()
  nummoo: number;

  @ApiModelProperty()
  @Column()
  lane: string;

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
  postcode: number;

  @ApiModelProperty()
  @Column()
  payment: string;

  @ApiModelProperty()
  @Column({default: null})
  code: string;

  @ApiModelProperty()
  @Column({default: 1})
  status: string;
}
