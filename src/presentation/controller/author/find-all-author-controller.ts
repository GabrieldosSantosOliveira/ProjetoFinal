import { Controller } from '@/interfaces/controller'
import { HttpResponse } from '@/interfaces/http'
import {
  AuthorViewModel,
  AuthorViewModelHttp,
} from './../../view-models/author-view-model'
import { FindAllAuthorUseCase } from '@/interfaces/use-cases'
import { ResponseEntity } from '@/helpers/http'
import { ExceptionFilter } from '@/presentation/error/exception-filter'
export interface FindAllAuthorControllerConstructorParams {
  findAllAuthorUseCase: FindAllAuthorUseCase
}
export class FindAllAuthorController implements Controller {
  constructor(
    private readonly params: FindAllAuthorControllerConstructorParams,
  ) {}

  async handle(): Promise<HttpResponse<AuthorViewModelHttp[]>> {
    try {
      const { findAllAuthorUseCase } = this.params
      const authors = await findAllAuthorUseCase.handle()
      return ResponseEntity.ok(authors.map(AuthorViewModel.toHTTP))
    } catch (error) {
      return ExceptionFilter.handle(error)
    }
  }
}
