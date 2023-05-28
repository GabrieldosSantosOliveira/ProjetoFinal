import { Author } from '../domain'

export interface LoadAuthorByIdRepository {
  findById(id: string): Promise<Author | null>
}
