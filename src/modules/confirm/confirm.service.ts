import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Confirm } from './confirm.entity';

@Injectable()
export class ConfirmService {
  constructor( @Inject('ConfirmToken') private readonly confirm: Repository<Confirm>) {}

  async find($params = {}): Promise<Confirm[]> {
    return this.confirm.find($params);
  }

  async save($params): Promise<Confirm[] | Confirm> {
    return this.confirm.save($params);
  }

  async saveOne($params): Promise<Confirm> {
    return this.confirm.save($params);
  }

  async create($params) {
    return this.confirm.save($params);
  }

  async findOne($params = {}): Promise<Confirm> {
    return this.confirm.findOne($params);
  }

  async delete($params): Promise<Confirm[] | Confirm> {
    const confirm = await this.confirm.findOne({
      where: $params,
    });
    if (confirm) {
      confirm.isDisable = await true;

      return await this.confirm.save(confirm);
    }
  }

  async queryBuilder(
    $where = '',
    $relations = [],
    $confirm = [],
  ): Promise<Confirm[]> {
    let query = await this.confirm.createQueryBuilder('');

    if ($where) {
      query = query.where($where);
    }

    if ($relations.length) {
      $relations.map($objRelation => {
        query = query.leftJoinAndSelect($objRelation.field, $objRelation.alias);
      });
    }

    if ($confirm.length) {
      $confirm.map(($objConfirm, $index) => {
        if (!$index) {
          query = query.confirmBy($objConfirm.field, $objConfirm.direction);
        } else {
          query = query.addConfirmBy($objConfirm.field, $objConfirm.direction);
        }
      });
    }
    return query.getMany();
  }
}
