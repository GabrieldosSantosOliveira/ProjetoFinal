import { HttpStatusCode } from '@/helpers/http/http-status-code'

export interface HttpResponse {
  body: any
  statusCode: HttpStatusCode
}
