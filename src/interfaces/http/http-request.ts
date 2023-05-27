export interface HttpRequest<B = any, Q = any, P = any> {
  params: P
  query: Q
  body: B
}
