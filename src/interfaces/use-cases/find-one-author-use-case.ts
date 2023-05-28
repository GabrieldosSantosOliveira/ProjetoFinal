import { Author } from '@/app/domain'

export interface FindOneAuthorUseCase {
  handle(id: string): Promise<Author>
}
