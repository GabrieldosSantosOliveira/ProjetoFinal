import { HttpStatusCode } from '@/helpers/http/http-status-code'

export interface HttpResponse<T = any> {
  body: T
  statusCode: HttpStatusCode
}
