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
export class Status {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column()
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
