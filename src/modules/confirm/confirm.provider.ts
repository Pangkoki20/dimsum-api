import { Connection, Repository } from 'typeorm';
import { Confirm } from './confirm.entity';

export const ConfirmProvider = [
         {
           provide: 'ConfirmToken',
           useFactory: (con: Connection) =>
             con.getRepository(Confirm),
           inject: ['DbConnectionToken'],
         },
       ];
