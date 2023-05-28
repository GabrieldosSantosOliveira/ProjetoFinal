import { Author } from '@/app/domain'
import {
  CreateAuthorRepository,
  LoadAuthorByIdRepository,
  LoadAuthorsRepository,
  RemoveAuthorRepository,
  SaveAuthorRepository,
} from '@/app/repositories'

export class InMemoryAuthorRepository
  implements
    CreateAuthorRepository,
    LoadAuthorByIdRepository,
    LoadAuthorsRepository,
    SaveAuthorRepository,
    RemoveAuthorRepository
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

  async save(author: Author): Promise<void> {
    const authorIndex = this.authors.findIndex(({ id }) => id === author.id)
    if (authorIndex >= 0) {
      this.authors[authorIndex] = author
    }
  }

  async remove(id: string): Promise<void> {
    const authorsWithoutAuthorRemoved = this.authors.filter(
      (author) => id !== author.id,
    )
    this.authors = authorsWithoutAuthorRemoved
  }
}
export const makeInMemoryAuthorRepository = () => {
  const inMemoryAuthorRepository = new InMemoryAuthorRepository()
  return { inMemoryAuthorRepository }
}
