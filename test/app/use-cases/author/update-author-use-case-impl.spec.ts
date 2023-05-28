import { UpdateAuthorUseCaseImpl } from '@/app/use-cases/author/update-author-use-case-impl'
import { makeInMemoryAuthorRepository } from '../../repositories/in-memory-author-repository'
import { UpdateAuthorUseCaseParams } from '@/interfaces/use-cases'
import { faker } from '@faker-js/faker'
import { makeAuthor } from '@/test/factories/make-author'
import { makeDateWithLessHours } from '@/test/factories/factory-date-with-less-hours'
import { AuthorNotFoundException } from '@/utils/http'

const makeSut = () => {
  const { inMemoryAuthorRepository } = makeInMemoryAuthorRepository()
  const sut = new UpdateAuthorUseCaseImpl({
    loadAuthorByIdRepository: inMemoryAuthorRepository,
    saveAuthorRepository: inMemoryAuthorRepository,
  })
  return { sut, inMemoryAuthorRepository }
}
const makeRequest = (
  params: Partial<UpdateAuthorUseCaseParams> = {},
): UpdateAuthorUseCaseParams => {
  return {
    id: 'any_id',
    dateOfBirth: faker.date.birthdate(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    ...params,
  }
}
describe('UpdateAuthorUseCase', () => {
  it('should update author if success', async () => {
    const { sut, inMemoryAuthorRepository } = makeSut()
    const author = makeAuthor({
      createdAt: makeDateWithLessHours(2),
      updatedAt: makeDateWithLessHours(2),
    })
    const authorUpdatedAt = author.updatedAt
    await inMemoryAuthorRepository.create(author)
    await sut.handle(
      makeRequest({ firstName: 'any_first_name_update', id: author.id }),
    )
    const authorAfterUpdate = await inMemoryAuthorRepository.findById(author.id)
    const updateAtIsUpdateAfterSave = authorAfterUpdate
      ? authorAfterUpdate?.updatedAt > authorUpdatedAt
      : false

    expect(updateAtIsUpdateAfterSave).toBe(true)
    expect(authorAfterUpdate?.firstName).toBe('any_first_name_update')
  })
  it('should throw if author not found', async () => {
    const { sut } = makeSut()
    await expect(sut.handle(makeRequest())).rejects.toThrow(
      AuthorNotFoundException,
    )
  })
})
