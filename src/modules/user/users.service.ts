import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersToken') private readonly users: Repository<Users>,
  ) {}

  async find($params = {}): Promise<Users[]> {
    return this.users.find($params);
  }

  async save($params): Promise<Users[] | Users> {
    return this.users.save($params);
  }

  async saveOne($params): Promise<Users> {
    return this.users.save($params);
  }

  async create($params) {
    return this.users.save($params);
  }

  async findOne($params = {}): Promise<Users> {
    return this.users.findOne($params);
  }

  async delete($params): Promise<Users[] | Users> {
    const users = await this.users.findOne({
      where: $params,
    });
    if (users) {
      users.isDisable = await true;

      return await this.users.save(users);
    }
  }

  async queryBuilder(
    $where = '',
    $relations = [],
    $order = [],
  ): Promise<Users[]> {
    let query = await this.users.createQueryBuilder('users');

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

  async genKey(len = 80) {
    let name = await '';
    let possible = await 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < len; i++) {
      name += await possible.charAt(
        Math.floor(Math.random() * possible.length),
      );
    }

    return name;
  }
}
