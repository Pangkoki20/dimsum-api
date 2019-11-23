import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Menu } from './menu.entity';

@Injectable()
export class MenuService {
  constructor(@Inject('MenuToken') private readonly menu: Repository<Menu>) {}

  async find($params = {}): Promise<Menu[]> {
    return this.menu.find($params);
  }

  async save($params): Promise<Menu[] | Menu> {
    return this.menu.save($params);
  }

  async saveOne($params): Promise<Menu> {
    return this.menu.save($params);
  }

  async create($params) {
    return this.menu.save($params);
  }

  async findOne($params = {}): Promise<Menu> {
    return this.menu.findOne($params);
  }

  async delete($params): Promise<Menu[] | Menu> {
    const menu = await this.menu.findOne({
      where: $params,
    });
    if (menu) {
      menu.isDisable = await true;

      return await this.menu.save(menu);
    }
  }

  async queryBuilder(
    $where = '',
    $relations = [],
    $order = [],
  ): Promise<Menu[]> {
    let query = await this.menu.createQueryBuilder('order');

    if ($where) {
      query = query.where($where);
    }

    if ($relations.length) {
      $relations.map($objRelation => {
        query = query.leftJoinAndSelect($objRelation.field, $objRelation.alias);
      });
    }

    if ($order.length) {
      $order.map(($objOrder, $index) => {
        if (!$index) {
          query = query.orderBy($objOrder.field, $objOrder.direction);
        } else {
          query = query.addOrderBy($objOrder.field, $objOrder.direction);
        }
      });
    }
    return query.getMany();
  }
}
