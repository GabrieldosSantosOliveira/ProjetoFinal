import { Book } from '@/app/domain/book'
import { makeBook } from '@/test/factories/make-book'

describe('Book', () => {
  it('should be able create Book', () => {
    expect(makeBook()).toBeInstanceOf(Book)
  })
})
