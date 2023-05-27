import 'dotenv/config'
import { Options } from 'sequelize'
export const env = {
  APP_PORT: Number(process.env.APP_PORT) || 3000,
  DB_USERNAME: process.env.DB_USERNAME || 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD || 'postgres',
  DB_DATABASE: process.env.DB_DATABASE || 'projeto',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  DB_DIALECT: (process.env.DB_DIALECT as Options['dialect']) || 'postgres',
}
