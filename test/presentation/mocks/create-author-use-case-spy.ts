import { Author } from '@/app/domain'
import {
  CreateAuthorUseCase,
  CreateAuthorUseCaseParams,
} from '@/interfaces/use-cases'
import { makeAuthor } from '@/test/factories/make-author'

export class CreateAuthorUseCaseSpy implements CreateAuthorUseCase {
  public author: Author
  public params: CreateAuthorUseCaseParams
  async handle(data: CreateAuthorUseCaseParams): Promise<Author> {
    this.params = data
    this.author = makeAuthor()
    return this.author
  }
}
export class CreateAuthorUseCaseWithError implements CreateAuthorUseCase {
  async handle(): Promise<Author> {
    throw new Error()
  }
}
