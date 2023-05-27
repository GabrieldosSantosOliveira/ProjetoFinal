import { Author } from '@/app/domain/author'
export interface AuthorViewModelHttp {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: Date
  createdAt: Date
  updatedAt: Date
}
export class AuthorViewModel {
  static toHTTP(author: Author) {
    return {
      id: author.id,
      firstName: author.firstName,
      lastName: author.lastName,
      dateOfBirth: author.dateOfBirth,
      createdAt: author.createdAt,
      updatedAt: author.updatedAt,
    }
  }
}
