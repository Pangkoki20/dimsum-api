import { Connection, Repository } from 'typeorm';
import { Delivery } from './delivery.entity';

export const DeliveryProvider = [
  {
    provide: 'DeliveryToken',
    useFactory: (con: Connection) => con.getRepository(Delivery),
    inject: ['DbConnectionToken'],
  },
];
