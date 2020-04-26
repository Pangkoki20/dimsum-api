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
export class Delivery {
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
  firstname: string;

  @ApiModelProperty()
  @Column()
  lastname: string;

  @ApiModelProperty()
  @Column({ default: 'user' })
  role: string;

  @ApiModelProperty()
  @Column({ default: 'user' })
  status: string;
}
