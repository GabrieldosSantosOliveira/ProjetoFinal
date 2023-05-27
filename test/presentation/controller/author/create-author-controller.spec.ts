import {
  CreateAuthorController,
  CreateAuthorControllerConstructorParams,
  CreateAuthorControllerRequest,
} from '@/presentation/controller/author/create-author-controller'
import {
  CreateAuthorUseCaseSpy,
  CreateAuthorUseCaseWithError,
} from '../../mocks/create-author-use-case-spy'
import { HttpRequest } from '@/interfaces/http'
import { faker } from '@faker-js/faker'
import { HttpStatusCode } from '@/helpers/http'
const makeRequest = (
  params: Partial<CreateAuthorControllerRequest> = {},
): HttpRequest<CreateAuthorControllerRequest, any, any> => {
  return {
    body: {
      dateOfBirth: faker.date.birthdate().toISOString(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      ...params,
    },
    params: {},
    query: {},
  }
}
const makeSut = (
  params: Partial<CreateAuthorControllerConstructorParams> = {},
) => {
  const createAuthorUseCaseSpy = new CreateAuthorUseCaseSpy()
  const sut = new CreateAuthorController({
    createAuthorUseCase: createAuthorUseCaseSpy,
    ...params,
  })
  return { sut, createAuthorUseCaseSpy }
}
describe('CreateAuthorController', () => {
  it('should return 400 if firstName is not provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeRequest({ firstName: undefined }))
    expect(httpResponse.statusCode).toBe(HttpStatusCode.BAD_REQUEST)
  })
  it('should return 400 if lastName is not provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(makeRequest({ lastName: undefined }))
    expect(httpResponse.statusCode).toBe(HttpStatusCode.BAD_REQUEST)
  })
  it('should return 400 if dateOfBirth is not provided', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(
      makeRequest({ dateOfBirth: undefined }),
    )
    expect(httpResponse.statusCode).toBe(HttpStatusCode.BAD_REQUEST)
  })
  it('should call CreateAuthorUseCase with correct params', async () => {
    const { sut, createAuthorUseCaseSpy } = makeSut()
    const request = makeRequest()
    await sut.handle(request)
    expect(createAuthorUseCaseSpy.params).toEqual({
      ...request.body,
      dateOfBirth: new Date(request.body.dateOfBirth),
    })
  })
  it('should return author if success', async () => {
    const { sut } = makeSut()
    const request = makeRequest()
    const httpResponse = await sut.handle(request)
    expect(httpResponse.statusCode).toBe(HttpStatusCode.CREATED)
    expect(httpResponse.body).toHaveProperty('id')
  })
  it('should return 500 if CreateAuthorUseCase throw', async () => {
    const { sut } = makeSut({
      createAuthorUseCase: new CreateAuthorUseCaseWithError(),
    })
    const httpResponse = await sut.handle(makeRequest())
    expect(httpResponse.statusCode).toBe(HttpStatusCode.SERVER_ERROR)
  })
})
