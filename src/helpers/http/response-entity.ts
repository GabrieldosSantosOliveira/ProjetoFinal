import { HttpResponse } from '@/interfaces/http/http-response'
import { HttpStatusCode } from './http-status-code'

export class ResponseEntity {
  static ok(body: any): HttpResponse {
    return { body, statusCode: HttpStatusCode.OK }
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

  static serverError(body: any): HttpResponse {
    return {
      body,
      statusCode: HttpStatusCode.SERVER_ERROR,
    }
  }

  static noContent(): HttpResponse {
    return {
      body: null,
      statusCode: HttpStatusCode.NOT_CONTENT,
    }
  }
}
