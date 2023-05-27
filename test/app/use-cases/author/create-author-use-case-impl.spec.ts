import { CreateAuthorUseCaseImpl } from '@/app/use-cases/author/create-author-use-case-impl'
import { makeInMemoryAuthorRepository } from '../../repositories/in-memory-author-repository'
import { faker } from '@faker-js/faker'
import { CreateAuthorUseCaseParams } from '@/interfaces/use-cases'

const makeSut = () => {
  const { inMemoryAuthorRepository } = makeInMemoryAuthorRepository()
  const sut = new CreateAuthorUseCaseImpl({
    createAuthorRepository: inMemoryAuthorRepository,
  })
  return { sut, inMemoryAuthorRepository }
}
const makeRequest = (
  params: Partial<CreateAuthorUseCaseParams> = {},
): CreateAuthorUseCaseParams => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  dateOfBirth: faker.date.birthdate(),
  ...params,
})
describe('CreateAuthorUseCase', () => {
  it('should create author', async () => {
    const { inMemoryAuthorRepository, sut } = makeSut()
    const author = await sut.handle(makeRequest())
    const authorSaveInDatabase = await inMemoryAuthorRepository.findById(
      author.id,
    )
    expect(authorSaveInDatabase?.id).toBe(author.id)
  })
})
