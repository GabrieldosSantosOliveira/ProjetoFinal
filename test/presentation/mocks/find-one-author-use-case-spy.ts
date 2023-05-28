import { Author } from '@/app/domain'
import { FindOneAuthorUseCase } from '@/interfaces/use-cases'
import { makeAuthor } from '@/test/factories/make-author'
import { AuthorNotFoundException } from '@/utils/http'

export class FindOneAuthorUseCaseSpy implements FindOneAuthorUseCase {
  public author: Author
  async handle(id: string): Promise<Author> {
    this.author = makeAuthor()
    return this.author
  }
}
export class FindOneAuthorUseCaseWithError implements FindOneAuthorUseCase {
  async handle(id: string): Promise<Author> {
    throw new Error()
  }
}
export class FindOneAuthorUseCaseWithException implements FindOneAuthorUseCase {
  async handle(id: string): Promise<Author> {
    throw new AuthorNotFoundException()
  }
}
