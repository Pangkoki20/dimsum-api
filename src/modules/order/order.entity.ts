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
  menu_name: string;

  @ApiModelProperty()
  @Column()
  menu_value: string;

  @ApiModelProperty()
  @Column()
  menu_price: string;

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
