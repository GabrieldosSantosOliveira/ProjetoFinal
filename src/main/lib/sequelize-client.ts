import { SequelizeClient } from '@/infra/database/sequelize/sequelize'
import { env } from './../config/env'
export const sequelizeClient = new SequelizeClient({
  database: env.DB_DATABASE,
  dialect: env.DB_DIALECT,
  host: env.DB_HOST,
  password: env.DB_PASSWORD,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
})
