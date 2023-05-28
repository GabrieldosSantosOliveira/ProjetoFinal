import {
  RemoveAuthorController,
  RemoveAuthorControllerConstructorParams,
  RemoveAuthorControllerParams,
} from '@/presentation/controller/author/remove-author-controller'
import {
  RemoveAuthorUseCaseSpy,
  RemoveAuthorUseCaseWithError,
  RemoveAuthorUseCaseWithException,
} from '../../mocks/remove-author-use-case-spy'
import { HttpRequest } from '@/interfaces/http'
import { HttpStatusCode } from '@/helpers/http'

const makeSut = (
  params: Partial<RemoveAuthorControllerConstructorParams> = {},
) => {
  const removeAuthorUseCaseSpy = new RemoveAuthorUseCaseSpy()
  const sut = new RemoveAuthorController({
    removeAuthorUseCase: removeAuthorUseCaseSpy,
    ...params,
  })
  return { sut, removeAuthorUseCaseSpy }
}
const makeRequest = (
  params: Partial<RemoveAuthorControllerParams> = {},
): HttpRequest<any, any, RemoveAuthorControllerParams> => {
  return {
    body: {},
    params: {
      id: 'any_id',
      ...params,
    },
    query: {},
  }
}
describe('RemoveAuthorController', () => {
  it('should return 400 if id is not provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeRequest({ id: undefined }))
    expect(httpResponse.statusCode).toBe(HttpStatusCode.BAD_REQUEST)
  })
  it('should return 204 if success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeRequest())
    expect(httpResponse.statusCode).toBe(HttpStatusCode.NOT_CONTENT)
  })
  it('should return 500 if RemoveAuthorUseCaseWithError throw Error', async () => {
    const { sut } = makeSut({
      removeAuthorUseCase: new RemoveAuthorUseCaseWithError(),
    })
    const httpResponse = await sut.handle(makeRequest())
    expect(httpResponse.statusCode).toBe(HttpStatusCode.SERVER_ERROR)
  })
  it('should return 500 if RemoveAuthorUseCaseWithError throw AuthorNotFoundException', async () => {
    const { sut } = makeSut({
      removeAuthorUseCase: new RemoveAuthorUseCaseWithException(),
    })
    const httpResponse = await sut.handle(makeRequest())
    expect(httpResponse.statusCode).toBe(HttpStatusCode.NOT_FOUND)
  })
})
