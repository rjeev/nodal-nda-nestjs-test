import { Injectable, Inject } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './cats.entity';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private catsRepository: typeof Cat,

    @Inject('SEQUELIZE')
    private sequelizeRepository: Sequelize,
  ) {}

  async findAll(): Promise<Cat[]> {
    const data = await this.sequelizeRepository.createSchema('schema2', {});
    console.log('wowwwwww', data);
    return this.catsRepository.findAll<Cat>();
  }
}
