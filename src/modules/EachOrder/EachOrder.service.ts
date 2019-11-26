import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EachOrder } from './EachOrder.entity';

@Injectable()
export class EachOrderService {
  constructor(
    @Inject('EachOrderToken') private readonly eachorder: Repository<EachOrder>,
  ) {}

  async find($params = {}): Promise<EachOrder[]> {
    return this.eachorder.find($params);
  }

  async save($params): Promise<EachOrder[] | EachOrder> {
    return this.eachorder.save($params);
  }

  async saveOne($params): Promise<EachOrder> {
    return this.eachorder.save($params);
  }

  async create($params) {
    return this.eachorder.save($params);
  }

  async findOne($params = {}): Promise<EachOrder> {
    return this.eachorder.findOne($params);
  }

  async delete($params): Promise<EachOrder[] | EachOrder> {
    const eachorder = await this.eachorder.findOne({
      where: $params,
    });
    if (eachorder) {
      eachorder.isDisable = await true;

      return await this.eachorder.save(eachorder);
    }
  }

  async queryBuilder(
    $where = '',
    $relations = [],
    $order = [],
  ): Promise<EachOrder[]> {
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
      $order.map(($objEachOrder, $index) => {
        if (!$index) {
          query = query.orderBy($objEachOrder.field, $objEachOrder.direction);
        } else {
          query = query.addEachOrderBy(
            $objEachOrder.field,
            $objEachOrder.direction,
          );
        }
      });
    }
    return query.getMany();
  }
}
