import { Author } from '@/app/domain/author'
export interface CreateAuthorUseCaseParams {
  firstName: string
  lastName: string
  dateOfBirth: Date
}
export interface CreateAuthorUseCase {
  handle(data: CreateAuthorUseCaseParams): Promise<Author>
}
