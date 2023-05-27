import { Author } from '@/app/domain'
import {
  CreateAuthorRepository,
  LoadAuthorRepository,
} from '@/app/repositories'

export class InMemoryAuthorRepository
  implements CreateAuthorRepository, LoadAuthorRepository
{
  private authors: Author[] = []
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
