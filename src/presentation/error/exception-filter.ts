import { HttpResponse } from '@/interfaces/index'
import { HttpException } from '@/utils/index'
import { ResponseEntity } from '@/helpers/http/response-entity'

export class ExceptionFilter {
  public static handle(error: any): HttpResponse {
    if (error instanceof HttpException) {
      return ResponseEntity.customError(error.getStatusCode(), {
        error: error.getOptions().error,
        message: error.getOptions().message,
      })
    }
    return ResponseEntity.serverError()
  }
}
