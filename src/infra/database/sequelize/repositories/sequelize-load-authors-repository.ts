import { Author } from '@/app/domain'
import { LoadAuthorsRepository } from '@/app/repositories'
import { SequelizeClient } from '../sequelize'
import { SequelizeAuthorMapper } from '../mappers/sequelize-author-mapper'

export class SequelizeLoadAuthorsRepository implements LoadAuthorsRepository {
  constructor(private readonly sequelizeClient: SequelizeClient) {}
  async findAll(): Promise<Author[]> {
    const rawAuthors = await this.sequelizeClient.author.findAll()
    return rawAuthors.map(SequelizeAuthorMapper.toDomain)
  }
}
