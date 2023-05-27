import { Book, BookProps } from '@/app/domain/book'
import { makeDateWithLessHours } from './factory-date-with-less-hours'
import { makePublisher } from './make-publisher'

export const makeBook = (book: Partial<BookProps> = {}) => {
  return new Book({
    price: 100,
    publicationDate: makeDateWithLessHours(),
    title: 'any_title',
    publisher: makePublisher(),
    ...book,
  })
}
