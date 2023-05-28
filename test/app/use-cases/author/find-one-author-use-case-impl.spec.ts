import { FindOneAuthorUseCaseImpl } from '@/app/use-cases/author/find-one-author-use-case-impl'
import { makeInMemoryAuthorRepository } from '../../repositories/in-memory-author-repository'
import { makeAuthor } from '@/test/factories/make-author'

const makeSut = () => {
  const { inMemoryAuthorRepository } = makeInMemoryAuthorRepository()
  const sut = new FindOneAuthorUseCaseImpl({
    loadAuthorByIdRepository: inMemoryAuthorRepository,
  })
  return { sut, inMemoryAuthorRepository }
}
describe('FindOneAuthorUseCaseImpl', () => {
  it('should return author if success', async () => {
    const { sut, inMemoryAuthorRepository } = makeSut()
    const author = makeAuthor()
    await inMemoryAuthorRepository.create(author)
    const response = await sut.handle(author.id)
    expect(response).toEqual(author)
  })
  it('should throw if author not found', async () => {
    const { sut } = makeSut()
    await expect(sut.handle('any_id')).rejects.toThrow()
  })
})
