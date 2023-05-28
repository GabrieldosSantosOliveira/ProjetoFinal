import { ResponseEntity } from '@/helpers/http'
import { Controller } from '@/interfaces/controller'
import { HttpRequest, HttpResponse } from '@/interfaces/http'
import { UpdateAuthorUseCase } from '@/interfaces/use-cases'
import { UpdateAuthorBodyDto } from '@/presentation/dtos/author/update-author-body.dto'
import { ExceptionFilter } from '@/presentation/error/exception-filter'
import { ValidateDto } from '@/presentation/validator/ValidateDto'
import { MissingParamError } from '@/utils/http'
export interface UpdateAuthorControllerRequest {
  firstName?: string
  lastName?: string
  dateOfBirth?: string | number
}
export interface UpdateAuthorControllerParams {
  id: string
}
export interface UpdateAuthorControllerConstructorParams {
  updateAuthorUseCase: UpdateAuthorUseCase
}
export class UpdateAuthorController implements Controller {
  constructor(
    private readonly params: UpdateAuthorControllerConstructorParams,
  ) {}

  async handle(
    request: HttpRequest<
      UpdateAuthorControllerRequest,
      any,
      UpdateAuthorControllerParams
    >,
  ): Promise<HttpResponse<null>> {
    try {
      const { updateAuthorUseCase } = this.params
      if (!request.params.id) {
        return ResponseEntity.badRequest({
          error: new MissingParamError('id').message,
        })
      }
      const updateAuthorBodyDto = new UpdateAuthorBodyDto({
        dateOfBirth: request.body.dateOfBirth,
        firstName: request.body.firstName,
        lastName: request.body.lastName,
      })
      await ValidateDto.isValid(updateAuthorBodyDto)
      await updateAuthorUseCase.handle({
        ...request.body,
        dateOfBirth: request.body.dateOfBirth
          ? new Date(request.body.dateOfBirth)
          : undefined,
        id: request.params.id,
      })
      return ResponseEntity.noContent()
    } catch (error) {
      return ExceptionFilter.handle(error)
    }
  }
}
