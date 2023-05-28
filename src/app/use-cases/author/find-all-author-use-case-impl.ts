import { Author } from '@/app/domain'
import { LoadAuthorsRepository } from '@/app/repositories'
import { FindAllAuthorUseCase } from '@/interfaces/use-cases'
export interface FindAllAuthorUseCaseImplConstructorParams {
  loadAuthorsRepository: LoadAuthorsRepository
}
export class FindAllAuthorUseCaseImpl implements FindAllAuthorUseCase {
  constructor(
    private readonly params: FindAllAuthorUseCaseImplConstructorParams,
  ) {}

  async handle(): Promise<Author[]> {
    const { loadAuthorsRepository } = this.params
    return await loadAuthorsRepository.findAll()
  }
}
