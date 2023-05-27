import { Model, Sequelize, DataTypes } from 'sequelize'
import { Models } from './types'
export class Author extends Model {
  static associate(models: Models) {
    this.hasMany(models.livro, { as: 'livros' })
  }

  static initModel(sequelize: Sequelize) {
    this.init(
      {
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        data_nascimento: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: 'autor',
      },
    )
  }
}
