import { Author } from '@/app/domain'
import { SaveAuthorRepository } from '@/app/repositories'
import { SequelizeClient } from '../sequelize'
import { SequelizeAuthorMapper } from '../mappers/sequelize-author-mapper'

export class SequelizeSaveAuthorRepository implements SaveAuthorRepository {
  constructor(private readonly sequelizeClient: SequelizeClient) {}
  async save(author: Author): Promise<void> {
    const rawAuthor = SequelizeAuthorMapper.toSequelize(author)
    await this.sequelizeClient.author.update(rawAuthor, {
      where: {
        id: rawAuthor.id,
      },
    })
  }
}
