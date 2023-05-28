export interface RemoveAuthorUseCase {
  handle(id: string): Promise<void>
}
