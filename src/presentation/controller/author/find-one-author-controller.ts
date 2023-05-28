import { ResponseEntity } from '@/helpers/http'
import { Controller } from '@/interfaces/controller'
import { HttpRequest, HttpResponse } from '@/interfaces/http'
import { FindOneAuthorUseCase } from '@/interfaces/use-cases'
import { ExceptionFilter } from '@/presentation/error/exception-filter'
import {
  AuthorViewModel,
  AuthorViewModelHttp,
} from '@/presentation/view-models/author-view-model'
import { MissingParamError } from '@/utils/http'
export interface FindOneAuthorParams {
  id: string
}
export interface FindOneAuthorConstructorParams {
  findOneAuthorUseCase: FindOneAuthorUseCase
}
export class FindOneAuthorController implements Controller {
  constructor(private readonly params: FindOneAuthorConstructorParams) {}
  async handle(
    request: HttpRequest<any, any, FindOneAuthorParams>,
  ): Promise<HttpResponse<AuthorViewModelHttp>> {
    try {
      const { findOneAuthorUseCase } = this.params
      if (!request.params.id) {
        return ResponseEntity.badRequest({
          error: new MissingParamError('id').message,
        })
      }
      const author = await findOneAuthorUseCase.handle(request.params.id)
      return ResponseEntity.ok(AuthorViewModel.toHTTP(author))
    } catch (error) {
      return ExceptionFilter.handle(error)
    }
  }
}
