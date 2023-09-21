/* eslint-disable import/no-import-module-exports */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config();

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  namingStrategy: new SnakeNamingStrategy(),
  entities: [path.resolve(__dirname, '..', 'database', 'entities', '*')],
  migrations: [path.resolve(__dirname, '..', 'database', 'migrations', '*')],

}

module.exports = options
