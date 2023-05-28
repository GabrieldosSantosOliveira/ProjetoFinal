import {
  FindOneAuthorConstructorParams,
  FindOneAuthorController,
  FindOneAuthorParams,
} from '@/presentation/controller/author/find-one-author-controller'
import {
  FindOneAuthorUseCaseSpy,
  FindOneAuthorUseCaseWithError,
  FindOneAuthorUseCaseWithException,
} from '../../mocks/find-one-author-use-case-spy'
import { HttpRequest } from '@/interfaces/http'
import { HttpStatusCode } from '@/helpers/http'

const makeSut = (params: Partial<FindOneAuthorConstructorParams> = {}) => {
  const findOneAuthorUseCaseSpy = new FindOneAuthorUseCaseSpy()
  const sut = new FindOneAuthorController({
    findOneAuthorUseCase: findOneAuthorUseCaseSpy,
    ...params,
  })
  return { sut, findOneAuthorUseCaseSpy }
}
const makeRequest = (
  params: Partial<FindOneAuthorParams> = {},
): HttpRequest<any, any, FindOneAuthorParams> => {
  return {
    body: {},
    params: {
      id: 'any_id',
      ...params,
    },
    query: {},
  }
}
describe('FindOneAuthorController', () => {
  it('should return 400 if id is not provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeRequest({ id: undefined }))
    expect(httpResponse.statusCode).toBe(HttpStatusCode.BAD_REQUEST)
  })
  it('should return 500 if FindOneAuthorUseCase throw error', async () => {
    const { sut } = makeSut({
      findOneAuthorUseCase: new FindOneAuthorUseCaseWithError(),
    })
    const httpResponse = await sut.handle(makeRequest())
    expect(httpResponse.statusCode).toBe(HttpStatusCode.SERVER_ERROR)
  })
  it('should return 404 if FindOneAuthorUseCase throw exception AuthorNotFoundException', async () => {
    const { sut } = makeSut({
      findOneAuthorUseCase: new FindOneAuthorUseCaseWithException(),
    })
    const httpResponse = await sut.handle(makeRequest())
    expect(httpResponse.statusCode).toBe(HttpStatusCode.NOT_FOUND)
  })
  it('should return author if success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeRequest())
    expect(httpResponse.statusCode).toBe(HttpStatusCode.OK)
    expect(httpResponse.body).toHaveProperty('id')
  })
})
