import { Author } from '@/app/domain'
import { LoadAuthorByIdRepository } from '@/app/repositories'
import { FindOneAuthorUseCase } from '@/interfaces/use-cases'
import { AuthorNotFoundException } from '@/utils/http'
export interface FindOneAuthorUseCaseImplConstructorParams {
  loadAuthorByIdRepository: LoadAuthorByIdRepository
}
export class FindOneAuthorUseCaseImpl implements FindOneAuthorUseCase {
  constructor(
    private readonly params: FindOneAuthorUseCaseImplConstructorParams,
  ) {}

  async handle(id: string): Promise<Author> {
    const { loadAuthorByIdRepository } = this.params
    const author = await loadAuthorByIdRepository.findById(id)
    if (!author) {
      throw new AuthorNotFoundException()
    }
    return author
  }
}
