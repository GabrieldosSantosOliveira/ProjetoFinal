import { Sequelize, DataTypes, Model, Optional } from 'sequelize'
import { Models } from './types'
export type BookAttributes = {
  id: string
  title: string
  publicationDate: Date
  publisherId: string
  price: number
  createdAt: Date
  updatedAt: Date
}

export type BookCreationAttributes = Optional<BookAttributes, 'id'>
export class Book extends Model<BookAttributes, BookCreationAttributes> {
  declare id: string
  declare title: string
  declare publicationDate: Date
  declare price: number
  declare createdAt: Date
  declare updatedAt: Date
  declare publisherId: string
  static associate(models: Models) {
    this.hasOne(models.publisher, {
      as: 'publisher',
      foreignKey: 'publisherId',
    })
    this.belongsToMany(models.author, { through: 'exemplary' })
  }

  static initModel(sequelize: Sequelize) {
    this.init(
      {
        title: DataTypes.STRING,
        price: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        id: { type: DataTypes.STRING, primaryKey: true },
        publicationDate: DataTypes.DATE,
        publisherId: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'book',
        tableName: 'book',
      },
    )
  }
}
