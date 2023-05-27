import {
  CreateAuthorUseCase,
  CreateAuthorUseCaseParams,
} from '@/interfaces/use-cases/create-author-use-case'
import { Author } from '@/app/domain'
import { CreateAuthorRepository } from '@/app/repositories'
export interface CreateAuthorUseCaseImplConstructorParams {
  createAuthorRepository: CreateAuthorRepository
}
export class CreateAuthorUseCaseImpl implements CreateAuthorUseCase {
  constructor(
    private readonly params: CreateAuthorUseCaseImplConstructorParams,
  ) {}

  async handle({
    dateOfBirth,
    firstName,
    lastName,
  }: CreateAuthorUseCaseParams): Promise<Author> {
    const { createAuthorRepository } = this.params
    const author = new Author({ dateOfBirth, firstName, lastName })
    await createAuthorRepository.create(author)
    return author
  }
}
