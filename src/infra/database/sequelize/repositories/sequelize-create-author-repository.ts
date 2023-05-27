import { CreateAuthorRepository } from '@/app/repositories/create-author-repository'
import { SequelizeClient } from '../sequelize'
import { SequelizeAuthorMapper } from '../mappers/sequelize-author-mapper'
import { Author } from '@/app/domain/author'

export class SequelizeCreateAuthorRepository implements CreateAuthorRepository {
  constructor(private readonly sequelizeClient: SequelizeClient) {}
  async create(data: Author): Promise<void> {
    const rawAuthor = SequelizeAuthorMapper.toSequelize(data)
    await this.sequelizeClient.author.create(rawAuthor)
  }
}
