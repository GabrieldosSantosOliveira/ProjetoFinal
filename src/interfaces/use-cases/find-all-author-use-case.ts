import { Author } from '@/app/domain'

export interface FindAllAuthorUseCase {
  handle(): Promise<Author[]>
}
