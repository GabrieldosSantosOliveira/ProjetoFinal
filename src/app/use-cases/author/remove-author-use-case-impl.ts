import {
  LoadAuthorByIdRepository,
  RemoveAuthorRepository,
} from '@/app/repositories'
import { RemoveAuthorUseCase } from '@/interfaces/use-cases'
import { AuthorNotFoundException } from '@/utils/http'
export interface RemoveAuthorUseCaseImplConstructorParams {
  loadAuthorByIdRepository: LoadAuthorByIdRepository
  removeAuthorRepository: RemoveAuthorRepository
}
export class RemoveAuthorUseCaseImpl implements RemoveAuthorUseCase {
  constructor(
    private readonly params: RemoveAuthorUseCaseImplConstructorParams,
  ) {}

  async handle(id: string): Promise<void> {
    const { removeAuthorRepository, loadAuthorByIdRepository } = this.params
    const authorExists = await loadAuthorByIdRepository.findById(id)
    if (!authorExists) {
      throw new AuthorNotFoundException()
    }
    await removeAuthorRepository.remove(id)
  }
}
