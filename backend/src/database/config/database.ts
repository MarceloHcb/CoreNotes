import { Options } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();
const config: Options = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT) || 3306,
  dialect: 'mysql',
};

export = config;