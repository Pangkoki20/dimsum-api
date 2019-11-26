import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MenuOrder } from './menu_order.entity';

@Injectable()
export class MenuOrderService {
  constructor(
    @Inject('MenuOrderToken') private readonly menuOrder: Repository<MenuOrder>,
  ) {}

  async find($params = {}): Promise<MenuOrder[]> {
    return this.menuOrder.find($params);
  }

  async save($params): Promise<MenuOrder[] | MenuOrder> {
    return this.menuOrder.save($params);
  }

  async saveOne($params): Promise<MenuOrder> {
    return this.menuOrder.save($params);
  }

  async create($params) {
    return this.menuOrder.save($params);
  }

  async findOne($params = {}): Promise<MenuOrder> {
    return this.menuOrder.findOne($params);
  }

  async delete($params): Promise<MenuOrder[] | MenuOrder> {
    const order = await this.menuOrder.findOne({
      where: $params,
    });
    if (order) {
       order.isDisable = await true;
      return await this.menuOrder.save(order);
    }
  }
  async queryBuilder(
    $where = '',
    $relations = [],
    $order = [],
  ): Promise<MenuOrder[]> {
    let query = await this.menuOrder.createQueryBuilder('menuOrder');

    if ($where) {
      query = query.where($where);
    }

    if ($relations.length) {
      $relations.map($objRelation => {
        query = query.leftJoinAndSelect($objRelation.field, $objRelation.alias);
      });
    }

    if ($order.length) {
      $order.map($objOrder => {
        query = query.orderBy($objOrder.field, $objOrder.direction);
      });
    }

    return query.getMany();
  }
}