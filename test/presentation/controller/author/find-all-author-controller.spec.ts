import { HttpStatusCode } from '@/helpers/http'
import {
  FindAllAuthorController,
  FindAllAuthorControllerConstructorParams,
} from '@/presentation/controller/author/find-all-author-controller'
import {
  FindAllAuthorUseCaseSpy,
  FindAllAuthorUseCaseWithError,
} from '../../mocks/find-all-author-use-case-spy'

const makeSut = (
  params: Partial<FindAllAuthorControllerConstructorParams> = {},
) => {
  const findAllAuthorUseCaseSpy = new FindAllAuthorUseCaseSpy()
  const sut = new FindAllAuthorController({
    findAllAuthorUseCase: findAllAuthorUseCaseSpy,
    ...params,
  })
  return { sut, findAllAuthorUseCaseSpy }
}
describe('FindAllAuthorController', () => {
  it('should return authors if success', async () => {
    const { sut, findAllAuthorUseCaseSpy } = makeSut()
    const httpResponse = await sut.handle()
    expect(httpResponse.statusCode).toBe(HttpStatusCode.OK)
    expect(httpResponse.body.length).toBe(
      findAllAuthorUseCaseSpy.authors.length,
    )
  })
  it('should return 500 if FindAllAuthorUseCase throw', async () => {
    const { sut } = makeSut({
      findAllAuthorUseCase: new FindAllAuthorUseCaseWithError(),
    })
    const httpResponse = await sut.handle()
    expect(httpResponse.statusCode).toBe(HttpStatusCode.SERVER_ERROR)
  })
})
