import { Author } from '../domain/author'
export interface CreateAuthorRepositoryParams {
  firstName: string
  lastName: string
  dateOfBirth: Date
}
export interface CreateAuthorRepository {
  create(author: Author): Promise<void>
}
