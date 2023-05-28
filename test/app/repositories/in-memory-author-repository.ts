import { Author } from '@/app/domain'
import {
  CreateAuthorRepository,
  LoadAuthorByIdRepository,
  LoadAuthorsRepository,
} from '@/app/repositories'

export class InMemoryAuthorRepository
  implements
    CreateAuthorRepository,
    LoadAuthorByIdRepository,
    LoadAuthorsRepository
{
  private authors: Author[] = []
  async findAll(): Promise<Author[]> {
    return this.authors
  }

  async findById(id: string): Promise<Author | null> {
    const author = this.authors.find((author) => author.id === id)
    if (!author) {
      return null
    }
    return author
  }

  async create(author: Author): Promise<void> {
    this.authors.push(author)
  }
}
export const makeInMemoryAuthorRepository = () => {
  const inMemoryAuthorRepository = new InMemoryAuthorRepository()
  return { inMemoryAuthorRepository }
}
