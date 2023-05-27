import { Author } from '@/app/domain/author'
import { AuthorAttributes, Author as RawAuthor } from './../models/author'
export class SequelizeAuthorMapper {
  static toSequelize(author: Author): AuthorAttributes {
    return {
      createdAt: author.createdAt,
      dateOfBirth: author.dateOfBirth,
      firstName: author.firstName,
      id: author.id,
      lastName: author.lastName,
      updatedAt: author.updatedAt,
    }
  }

  static toDomain(rawAuthor: RawAuthor): Author {
    return new Author({
      dateOfBirth: rawAuthor.dateOfBirth,
      firstName: rawAuthor.firstName,
      lastName: rawAuthor.lastName,
      createdAt: rawAuthor.createdAt,
      id: rawAuthor.id,
      updatedAt: rawAuthor.updatedAt,
    })
  }
}
