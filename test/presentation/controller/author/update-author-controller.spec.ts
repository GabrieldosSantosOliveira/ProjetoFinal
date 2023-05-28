import {
  UpdateAuthorController,
  UpdateAuthorControllerConstructorParams,
  UpdateAuthorControllerParams,
  UpdateAuthorControllerRequest,
} from '@/presentation/controller/author/update-author-controller'
import {
  UpdateAuthorUseCaseSpy,
  UpdateAuthorUseCaseWithError,
  UpdateAuthorUseCaseWithException,
} from '../../mocks/update-author-use-case-spy'
import { HttpRequest } from '@/interfaces/http'
import { faker } from '@faker-js/faker'
import { HttpStatusCode } from '@/helpers/http'

const makeSut = (
  params: Partial<UpdateAuthorControllerConstructorParams> = {},
) => {
  const updateAuthorUseCaseSpy = new UpdateAuthorUseCaseSpy()
  const sut = new UpdateAuthorController({
    updateAuthorUseCase: updateAuthorUseCaseSpy,
    ...params,
  })
  return { sut, updateAuthorUseCaseSpy }
}
const makeRequest = (
  params: Partial<UpdateAuthorControllerRequest> = {},
): HttpRequest<
  UpdateAuthorControllerRequest,
  any,
  UpdateAuthorControllerParams
> => {
  return {
    body: {
      dateOfBirth: faker.date.birthdate().toISOString(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      ...params,
    },
    params: {
      id: 'any_id',
    },
    query: {},
  }
}
describe('UpdateAuthorUseCase', () => {
  it('should return 204 if success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeRequest())
    expect(httpResponse.statusCode).toBe(HttpStatusCode.NOT_CONTENT)
  })
  it('should call UpdateAuthorUseCase with correct params', async () => {
    const { sut, updateAuthorUseCaseSpy } = makeSut()
    const request = makeRequest()
    await sut.handle(request)
    expect({
      ...request.body,
      id: request.params.id,
    }).toEqual({
      ...updateAuthorUseCaseSpy.params,
      dateOfBirth: updateAuthorUseCaseSpy.params.dateOfBirth?.toISOString(),
    })
  })
  it('should return 500 if UpdateAuthorUseCase throw Error', async () => {
    const { sut } = makeSut({
      updateAuthorUseCase: new UpdateAuthorUseCaseWithError(),
    })
    const httpResponse = await sut.handle(makeRequest())
    expect(httpResponse.statusCode).toBe(HttpStatusCode.SERVER_ERROR)
  })
  it('should return 404 if UpdateAuthorUseCase throw exception AuthorNotFoundException', async () => {
    const { sut } = makeSut({
      updateAuthorUseCase: new UpdateAuthorUseCaseWithException(),
    })
    const httpResponse = await sut.handle(makeRequest())
    expect(httpResponse.statusCode).toEqual(HttpStatusCode.NOT_FOUND)
  })
})
