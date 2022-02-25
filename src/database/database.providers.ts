import { Sequelize } from 'sequelize-typescript';
import { Cat } from '../cats/cats.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: '127.0.0.1',
        port: 5432,
        username: 'postgres',
        password: 'rootpassword',
        database: 'nest',
      });
      sequelize.addModels([Cat]);
      await sequelize.sync();
      // await sequelize.createSchema("pradeep",{});
      return sequelize;
    },
  },
];
