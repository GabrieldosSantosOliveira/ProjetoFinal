import { HttpStatusCode } from '@/helpers/http'
import { HttpException } from './http-exception'
import { AuthorNotFoundError } from '../errors'

export class AuthorNotFoundException extends HttpException {
  constructor() {
    super(HttpStatusCode.NOT_FOUND, {
      error: 'AuthorNotFound',
      message: new AuthorNotFoundError().message,
      cause: new AuthorNotFoundError(),
      name: 'AuthorNotFoundException',
    })
  }
}
