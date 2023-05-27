import { Author } from '@/app/domain/author'
import { makeAuthor } from '@/test/factories/make-author'

describe('Author', () => {
  it('should be able create Author', () => {
    expect(makeAuthor()).toBeInstanceOf(Author)
  })
})
