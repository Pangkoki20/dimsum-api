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
export class MenuOrder {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column()
  order_id: string;

  @ApiModelProperty()
  @Column()
  user_id: number;

  @ApiModelProperty()
  @Column()
  namefood: string;
  @ApiModelProperty()
  @Column()
  value: string;

  @ApiModelProperty()
  @Column()
  price: number;

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
