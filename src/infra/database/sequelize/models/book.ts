import { Sequelize, DataTypes, Model } from 'sequelize'
import { Models } from './types'
export class Book extends Model {
  static associate(models: Models) {
    this.belongsTo(models.autor, { as: 'autor' })
  }

  static initModel(sequelize: Sequelize) {
    this.init(
      {
        titulo: DataTypes.STRING,
        editora: DataTypes.STRING,
        data_publicacao: DataTypes.DATE,
        preco: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'livro',
      },
    )
  }
}
