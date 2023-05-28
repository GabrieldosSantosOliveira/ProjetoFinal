import { Author } from '@/app/domain'
import { FindAllAuthorUseCase } from '@/interfaces/use-cases'
import { makeAuthor } from '@/test/factories/make-author'

export class FindAllAuthorUseCaseSpy implements FindAllAuthorUseCase {
  public authors: Author[] = []
  async handle(): Promise<Author[]> {
    this.authors = [makeAuthor(), makeAuthor()]
    return this.authors
  }
}
export class FindAllAuthorUseCaseWithError implements FindAllAuthorUseCase {
  async handle(): Promise<Author[]> {
    throw new Error()
  }
}
