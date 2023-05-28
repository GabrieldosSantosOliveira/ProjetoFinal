export interface UpdateAuthorUseCaseParams {
  firstName?: string
  lastName?: string
  dateOfBirth?: Date
  id: string
}
export interface UpdateAuthorUseCase {
  handle(data: UpdateAuthorUseCaseParams): Promise<void>
}
