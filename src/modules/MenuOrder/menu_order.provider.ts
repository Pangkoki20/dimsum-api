import { Connection, Repository } from 'typeorm';
import { MenuOrder } from './menu_order.entity';

export const MenuOrderProvider = [
  {
    provide: 'MenuOrderToken',
    useFactory: (con: Connection) => con.getRepository(MenuOrder),
    inject: ['DbConnectionToken'],
  },
];
