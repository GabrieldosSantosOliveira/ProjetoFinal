import { Model, Sequelize, DataTypes, Optional } from 'sequelize'
import { Models } from './types'
export type PublisherAttributes = {
  id: string
  name: string
}

export type PublisherCreationAttributes = Optional<PublisherAttributes, 'id'>
export class Publisher extends Model<
  PublisherAttributes,
  PublisherCreationAttributes
> {
  public id: string
  public name: string
  static associate(models: Models) {
    this.belongsTo(models.book, { as: 'books' })
  }

  static initModel(sequelize: Sequelize) {
    this.init(
      {
        id: { type: DataTypes.STRING, primaryKey: true },
        name: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'publisher',
        tableName: 'publisher',
      },
    )
  }
}
