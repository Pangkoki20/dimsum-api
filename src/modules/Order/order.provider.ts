import { Connection, Repository } from 'typeorm';
import { Order } from './Order.entity';

export const OrderProvider = [
  {
    provide: 'OrderToken',
    useFactory: (con: Connection) => con.getRepository(Order),
    inject: ['DbConnectionToken'],
  },
];
