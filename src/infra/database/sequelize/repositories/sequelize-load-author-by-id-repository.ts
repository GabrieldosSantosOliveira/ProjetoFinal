import { Author } from '@/app/domain'
import { LoadAuthorByIdRepository } from '@/app/repositories'
import { SequelizeClient } from '../sequelize'
import { SequelizeAuthorMapper } from '../mappers/sequelize-author-mapper'

export class SequelizeLoadAuthorByIdRepository
  implements LoadAuthorByIdRepository
{
  constructor(private readonly sequelizeClient: SequelizeClient) {}
  async findById(id: string): Promise<Author | null> {
    const rawAuthor = await this.sequelizeClient.author.findOne({
      where: { id },
    })
    if (!rawAuthor) {
      return null
    }
    return SequelizeAuthorMapper.toDomain(rawAuthor)
  }
}
