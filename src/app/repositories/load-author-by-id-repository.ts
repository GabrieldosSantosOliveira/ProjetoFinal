import { Author } from '../domain'

export interface LoadAuthorRepository {
  findById(id: string): Promise<Author | null>
}
