import { Author, AuthorProps } from '@/app/domain/author'
import { makeDateWithLessHours } from './factory-date-with-less-hours'

export const makeAuthor = (author: Partial<AuthorProps> = {}) => {
  return new Author({
    firstName: 'any_first_name',
    lastName: 'any_last_name',
    dateOfBirth: makeDateWithLessHours(),
    ...author,
  })
}
