import { RemoveAuthorUseCase } from '@/interfaces/use-cases'
import { AuthorNotFoundException } from '@/utils/http'

export class RemoveAuthorUseCaseSpy implements RemoveAuthorUseCase {
  public id: string
  async handle(id: string): Promise<void> {
    this.id = id
  }
}
export class RemoveAuthorUseCaseWithError implements RemoveAuthorUseCase {
  async handle(): Promise<void> {
    throw new Error()
  }
}
export class RemoveAuthorUseCaseWithException implements RemoveAuthorUseCase {
  async handle(): Promise<void> {
    throw new AuthorNotFoundException()
  }
}
