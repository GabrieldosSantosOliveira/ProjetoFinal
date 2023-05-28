import { makeInMemoryAuthorRepository } from '../../repositories/in-memory-author-repository'
import { FindAllAuthorUseCaseImpl } from '@/app/use-cases/author/find-all-author-use-case-impl'
import { makeAuthor } from '@/test/factories/make-author'

const makeSut = () => {
  const { inMemoryAuthorRepository } = makeInMemoryAuthorRepository()
  const sut = new FindAllAuthorUseCaseImpl({
    loadAuthorsRepository: inMemoryAuthorRepository,
  })
  return { sut, inMemoryAuthorRepository }
}

describe('FindAllUseCaseImpl', () => {
  it('should return authors if success', async () => {
    const { inMemoryAuthorRepository, sut } = makeSut()
    const author = makeAuthor()
    await inMemoryAuthorRepository.create(author)
    const authors = await sut.handle()
    expect(authors[0]).toEqual(author)
  })
})
