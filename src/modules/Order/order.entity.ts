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
  @UpdateDateColumn()
  user_id: number;

  @ApiModelProperty()
  @UpdateDateColumn()
  numhouse: number;

  @ApiModelProperty()
  @UpdateDateColumn()
  nummoo: number;

  @ApiModelProperty()
  @UpdateDateColumn()
  lane: string;

  @ApiModelProperty()
  @UpdateDateColumn()
  tambon: string;

  @ApiModelProperty()
  @UpdateDateColumn()
  amphoe: string;

  @ApiModelProperty()
  @UpdateDateColumn()
  changwat: string;

  @ApiModelProperty()
  @UpdateDateColumn()
  postcode: number;

  @ApiModelProperty()
  @UpdateDateColumn()
  payment: string;

  @ApiModelProperty()
  @UpdateDateColumn()
  code: string;

  @ApiModelProperty()
  @UpdateDateColumn()
  status: string;
}
