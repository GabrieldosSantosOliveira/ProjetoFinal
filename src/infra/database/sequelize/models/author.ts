import { Model, Sequelize, DataTypes, Optional } from 'sequelize'
import { Models } from './types'
export type AuthorAttributes = {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: Date
  createdAt: Date
  updatedAt: Date
}

export type AuthorCreationAttributes = Optional<AuthorAttributes, 'id'>

export class Author extends Model<AuthorAttributes, AuthorCreationAttributes> {
  public id: string
  public firstName: string
  public lastName: string
  public dateOfBirth: Date
  public createdAt: Date
  public updatedAt: Date
  static associate(models: Models) {
    this.belongsToMany(models.book, { through: 'exemplary' })
  }

  static initModel(sequelize: Sequelize) {
    this.init(
      {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        dateOfBirth: DataTypes.DATE,
        createdAt: DataTypes.DATE,
        id: { type: DataTypes.STRING, primaryKey: true },
        updatedAt: DataTypes.DATE,
      },
      {
        sequelize,
        tableName: 'author',
        modelName: 'author',
      },
    )
  }
}
