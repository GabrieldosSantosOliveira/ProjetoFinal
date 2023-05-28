import { ResponseEntity } from '@/helpers/http'
import { Controller } from '@/interfaces/controller'
import { HttpRequest, HttpResponse } from '@/interfaces/http'
import { RemoveAuthorUseCase } from '@/interfaces/use-cases'
import { ExceptionFilter } from '@/presentation/error/exception-filter'
import { MissingParamError } from '@/utils/http'
export interface RemoveAuthorControllerParams {
  id: string
}
export interface RemoveAuthorControllerConstructorParams {
  removeAuthorUseCase: RemoveAuthorUseCase
}
export class RemoveAuthorController implements Controller {
  constructor(
    private readonly params: RemoveAuthorControllerConstructorParams,
  ) {}

  async handle(
    request: HttpRequest<any, any, RemoveAuthorControllerParams>,
  ): Promise<HttpResponse<null>> {
    try {
      const { removeAuthorUseCase } = this.params
      if (!request.params.id) {
        return ResponseEntity.badRequest({
          error: new MissingParamError('id'),
        })
      }
      await removeAuthorUseCase.handle(request.params.id)
      return ResponseEntity.noContent()
    } catch (error) {
      return ExceptionFilter.handle(error)
    }
  }
}
