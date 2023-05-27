import { HttpResponse } from '@/interfaces/index'
import { HttpStatusCode } from './http-status-code'
import { ServerError } from './../errors'
export interface HttpResponseCustomErrorOptions {
  error: string
  message?: string | string[]
}
export class ResponseEntity {
  static badRequest(body: any): HttpResponse {
    return {
      body,
      statusCode: HttpStatusCode.BAD_REQUEST,
    }
  }

  static ok(body: any): HttpResponse {
    return {
      body,
      statusCode: HttpStatusCode.OK,
    }
  }

  static created(body: any): HttpResponse {
    return {
      body,
      statusCode: HttpStatusCode.CREATED,
    }
  }

  static notFound(body: any): HttpResponse {
    return {
      body,
      statusCode: HttpStatusCode.NOT_FOUND,
    }
  }

  static serverError(): HttpResponse {
    return {
      body: {
        statusCode: HttpStatusCode.SERVER_ERROR,
        error: 'Server Error',
        message: new ServerError().message,
      },
      statusCode: HttpStatusCode.SERVER_ERROR,
    }
  }

  static noContent(): HttpResponse {
    return {
      body: null,
      statusCode: HttpStatusCode.NOT_CONTENT,
    }
  }

  static customError(
    statusCode: number,
    options: HttpResponseCustomErrorOptions,
  ): HttpResponse {
    return {
      body: {
        statusCode,
        error: options.error,
        message: options.message,
      },
      statusCode,
    }
  }
}
