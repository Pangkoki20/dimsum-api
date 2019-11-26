import { Connection, Repository } from 'typeorm';
import { Menu } from './menu_order.entity';

export const MenuOrderProvider = [
  {
    provide: 'MenuOrderToken',
    useFactory: (con: Connection) => con.getRepository(Menu),
    inject: ['DbConnectionToken'],
  },
];
