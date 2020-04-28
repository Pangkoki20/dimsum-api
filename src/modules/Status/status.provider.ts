import { Connection, Repository } from 'typeorm';
import { Status } from './status.entity';

export const StatusProvider = [
  {
    provide: 'StatusToken',
    useFactory: (con: Connection) => con.getRepository(Status),
    inject: ['DbConnectionToken'],
  },
];
