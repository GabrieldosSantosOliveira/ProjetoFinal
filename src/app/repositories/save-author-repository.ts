import { Author } from '../domain'

export interface SaveAuthorRepository {
  save(author: Author): Promise<void>
}
