import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Order } from './Order.entity';

@Injectable()
export class OrderService {
  constructor(
    @Inject('OrderToken') private readonly order: Repository<Order>,
  ) {}

  async find($params = {}): Promise<Order[]> {
    return this.order.find($params);
  }

  async save($params): Promise<Order[] | Order> {
    return this.order.save($params);
  }

  async saveOne($params): Promise<Order> {
    return this.order.save($params);
  }

  async create($params) {
    return this.order.save($params);
  }

  async findOne($params = {}): Promise<Order> {
    return this.order.findOne($params);
  }

  async delete($params): Promise<Order[] | Order> {
    const order = await this.order.findOne({
      where: $params,
    });
    if (order) {
      order.isDisable = await true;
      return await this.order.save(order);
    }
  }

  async queryBuilder(
    $where = '',
    $relations = [],
    $order = [],
  ): Promise<Order[]> {
    let query = await this.order.createQueryBuilder('order');

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
