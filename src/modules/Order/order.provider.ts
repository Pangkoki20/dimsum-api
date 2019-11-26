import { Connection, Repository } from 'typeorm';
import { Order } from './order.entity';

export const OrderProvider = [
  {
    provide: 'OrderToken',
    useFactory: (con: Connection) => con.getRepository(Order),
    inject: ['DbConnectionToken'],
  },
];
