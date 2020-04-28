import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Status } from './status.entity';

@Injectable()
export class StatusService {
  constructor(
    @Inject('StatusToken') private readonly status: Repository<Status>,
  ) {}

  async find($params = {}): Promise<Status[]> {
    return this.status.find($params);
  }

  async save($params): Promise<Status[] | Status> {
    return this.status.save($params);
  }

  async saveOne($params): Promise<Status> {
    return this.status.save($params);
  }

  async create($params) {
    return this.status.save($params);
  }

  async findOne($params = {}): Promise<Status> {
    return this.status.findOne($params);
  }

  async delete($params): Promise<Status[] | Status> {
    const status = await this.status.findOne({
      where: $params,
    });
    if (status) {
      status.isDisable = await true;
      return await this.status.save(status);
    }
  }
  async queryBuilder(
    $where = '',
    $relations = [],
    $status = [],
  ): Promise<Status[]> {
    let query = await this.status.createQueryBuilder('status');

    if ($where) {
      query = query.where($where);
    }

    if ($relations.length) {
      $relations.map($objRelation => {
        query = query.leftJoinAndSelect($objRelation.field, $objRelation.alias);
      });
    }

    if ($status.length) {
      $status.map($objStatus => {
        query = query.orderBy($objStatus.field, $objStatus.direction);
      });
    }

    return query.getMany();
  }
}
