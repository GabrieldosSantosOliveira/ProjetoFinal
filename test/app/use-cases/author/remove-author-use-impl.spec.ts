import { RemoveAuthorUseCaseImpl } from '@/app/use-cases/author/remove-author-use-case-impl'
import { makeInMemoryAuthorRepository } from '../../repositories/in-memory-author-repository'
import { makeAuthor } from '@/test/factories/make-author'
import { AuthorNotFoundException } from '@/utils/http'

const makeSut = () => {
  const { inMemoryAuthorRepository } = makeInMemoryAuthorRepository()
  const sut = new RemoveAuthorUseCaseImpl({
    loadAuthorByIdRepository: inMemoryAuthorRepository,
    removeAuthorRepository: inMemoryAuthorRepository,
  })
  return { sut, inMemoryAuthorRepository }
}
describe('RemoveAuthorUseCaseImpl', () => {
  it('should remove author if success', async () => {
    const { sut, inMemoryAuthorRepository } = makeSut()
    const author = makeAuthor()
    await inMemoryAuthorRepository.create(author)
    await sut.handle(author.id)
    const authorWasDeleted = await inMemoryAuthorRepository.findById(author.id)
    expect(authorWasDeleted).toBe(null)
  })
  it('should throw if author not found', async () => {
    const { sut } = makeSut()

    await expect(sut.handle('any_id')).rejects.toThrow(AuthorNotFoundException)
  })
})
