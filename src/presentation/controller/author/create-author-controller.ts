import { ResponseEntity } from '@/helpers/http/response-entity'
import {
  HttpRequest,
  HttpResponse,
  CreateAuthorUseCase,
  Controller,
} from '@/interfaces/index'
import { CreateAuthorBodyDto } from '@/presentation/dtos/author/create-author-body.dto'
import {
  AuthorViewModel,
  AuthorViewModelHttp,
} from '@/presentation/view-models/author-view-model'
import { ValidateDto } from '@/presentation/validator/ValidateDto'
import { ExceptionFilter } from '@/presentation/error/exception-filter'
export interface CreateAuthorControllerRequest {
  firstName: string
  lastName: string
  dateOfBirth: string | number
}
export interface CreateAuthorControllerConstructorParams {
  createAuthorUseCase: CreateAuthorUseCase
}
export class CreateAuthorController implements Controller {
  constructor(
    private readonly params: CreateAuthorControllerConstructorParams,
  ) {}

  async handle(
    request: HttpRequest<CreateAuthorControllerRequest, any, any>,
  ): Promise<HttpResponse<AuthorViewModelHttp>> {
    try {
      const { createAuthorUseCase } = this.params
      const createAuthorBodyDto = new CreateAuthorBodyDto({
        dateOfBirth: request.body.dateOfBirth,
        firstName: request.body.firstName,
        lastName: request.body.lastName,
      })
      await ValidateDto.isValid(createAuthorBodyDto)
      const author = await createAuthorUseCase.handle({
        dateOfBirth: new Date(createAuthorBodyDto.dateOfBirth),
        firstName: createAuthorBodyDto.firstName,
        lastName: createAuthorBodyDto.lastName,
      })
      return ResponseEntity.created(AuthorViewModel.toHTTP(author))
    } catch (error) {
      return ExceptionFilter.handle(error)
    }
  }
}
