import { Sequelize, Options } from 'sequelize'
import { Author } from './models/author'
import { Book } from './models/book'
import { Publisher } from './models/publisher'
export interface OptionsSequelizeClient {
  username: string
  password: string
  database: string
  host: string
  port: number
  dialect: Options['dialect']
}
export class SequelizeClient {
  connection: Sequelize
  author: typeof Author
  book: typeof Book
  publisher: typeof Publisher
  constructor(options: OptionsSequelizeClient) {
    this.connection = new Sequelize(
      options.database,
      options.username,
      options.password,
      {
        host: options.host,
        port: options.port,
        dialect: options.dialect,
      },
    )
    Publisher.initModel(this.connection)
    Book.initModel(this.connection)
    Author.initModel(this.connection)
    Book.associate(this.connection.models)
    Author.associate(this.connection.models)
    this.author = Author
    this.book = Book
    this.publisher = Publisher
  }
}
