import { Connection, Repository } from 'typeorm';
import { Menu } from './menu.entity';

export const MenuProvider = [
  {
    provide: 'MenuToken',
    useFactory: (con: Connection) => con.getRepository(Menu),
    inject: ['DbConnectionToken'],
  },
];
