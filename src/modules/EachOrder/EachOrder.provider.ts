import { Connection, Repository } from 'typeorm';
import { EachOrder } from './eachorder.entity';

export const EachOrderProvider = [
  {
    provide: 'EachOrderToken',
    useFactory: (con: Connection) => con.getRepository(EachOrder),
    inject: ['DbConnectionToken'],
  },
];
