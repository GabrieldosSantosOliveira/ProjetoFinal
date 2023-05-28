import {
  UpdateAuthorUseCase,
  UpdateAuthorUseCaseParams,
} from '@/interfaces/use-cases'
import { AuthorNotFoundException } from '@/utils/http'

export class UpdateAuthorUseCaseSpy implements UpdateAuthorUseCase {
  public params: UpdateAuthorUseCaseParams

  async handle(data: UpdateAuthorUseCaseParams): Promise<void> {
    this.params = data
  }
}
export class UpdateAuthorUseCaseWithError implements UpdateAuthorUseCase {
  async handle(): Promise<void> {
    throw new Error()
  }
}
export class UpdateAuthorUseCaseWithException implements UpdateAuthorUseCase {
  async handle(): Promise<void> {
    throw new AuthorNotFoundException()
  }
}
