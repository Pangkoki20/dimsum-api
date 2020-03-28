import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Delivery } from './delivery.entity';

@Injectable()
export class DeliveryService {
  constructor(
    @Inject('DeliveryToken') private readonly delivery: Repository<Delivery>,
  ) {}

  async find($params = {}): Promise<Delivery[]> {
    return this.delivery.find($params);
  }

  async save($params): Promise<Delivery[] | Delivery> {
    return this.delivery.save($params);
  }

  async saveOne($params): Promise<Delivery> {
    return this.delivery.save($params);
  }

  async create($params) {
    return this.delivery.save($params);
  }

  async findOne($params = {}): Promise<Delivery> {
    return this.delivery.findOne($params);
  }

  async delete($params): Promise<Delivery[] | Delivery> {
    const delivery = await this.delivery.findOne({
      where: $params,
    });
    if (delivery) {
      delivery.isDisable = await true;
      return await this.delivery.save(delivery);
    }
  }
  async queryBuilder(
    $where = '',
    $relations = [],
    $delivery = [],
  ): Promise<Delivery[]> {
    let query = await this.delivery.createQueryBuilder('delivery');

    if ($where) {
      query = query.where($where);
    }

    if ($relations.length) {
      $relations.map($objRelation => {
        query = query.leftJoinAndSelect($objRelation.field, $objRelation.alias);
      });
    }

    if ($delivery.length) {
      $delivery.map($objDelivery => {
        query = query.orderBy($objDelivery.field, $objDelivery.direction);
      });
    }

    return query.getMany();
  }
}
