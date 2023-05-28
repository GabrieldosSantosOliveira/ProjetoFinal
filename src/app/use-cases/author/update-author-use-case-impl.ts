import {
  LoadAuthorByIdRepository,
  SaveAuthorRepository,
} from '@/app/repositories'
import {
  UpdateAuthorUseCase,
  UpdateAuthorUseCaseParams,
} from '@/interfaces/use-cases'
import { AuthorNotFoundException } from '@/utils/http'
export interface UpdateAuthorUseCaseImplConstructorParams {
  saveAuthorRepository: SaveAuthorRepository
  loadAuthorByIdRepository: LoadAuthorByIdRepository
}
export class UpdateAuthorUseCaseImpl implements UpdateAuthorUseCase {
  constructor(
    private readonly params: UpdateAuthorUseCaseImplConstructorParams,
  ) {}

  async handle(data: UpdateAuthorUseCaseParams): Promise<void> {
    const { saveAuthorRepository, loadAuthorByIdRepository } = this.params
    const author = await loadAuthorByIdRepository.findById(data.id)
    if (!author) {
      throw new AuthorNotFoundException()
    }
    author.update({
      dateOfBirth: data.dateOfBirth,
      firstName: data.firstName,
      lastName: data.lastName,
    })
    await saveAuthorRepository.save(author)
  }
}
