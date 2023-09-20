import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User, Products } from './entity/User';
config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, Products], // Adicione todas as suas entidades aqui
  subscribers: [],
  migrations: [],
});
