import { Author } from '../domain'

export interface LoadAuthorsRepository {
  findAll(): Promise<Author[]>
}
