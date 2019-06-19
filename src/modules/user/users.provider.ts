
import { Connection , Repository } from 'typeorm';
import { Users } from './users.entity';

export const UsersProvider = [
  {
    provide: 'UsersToken',
    useFactory: (con: Connection) => con.getRepository(Users),
    inject: ['DbConnectionToken'],
  },
];
