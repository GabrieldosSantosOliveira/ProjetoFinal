import { RemoveAuthorRepository } from '@/app/repositories'
import { SequelizeClient } from '../sequelize'

export class SequelizeRemoveAuthorRepository implements RemoveAuthorRepository {
  constructor(private readonly sequelizeClient: SequelizeClient) {}
  async remove(id: string): Promise<void> {
    await this.sequelizeClient.author.destroy({ where: { id } })
  }
}
