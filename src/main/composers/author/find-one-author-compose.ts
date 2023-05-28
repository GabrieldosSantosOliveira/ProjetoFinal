import { FindOneAuthorUseCaseImpl } from '@/app/use-cases/author/find-one-author-use-case-impl'
import { SequelizeLoadAuthorByIdRepository } from '@/infra/database/sequelize/repositories/sequelize-load-author-by-id-repository'
import { sequelizeClient } from '@/main/lib/sequelize-client'
import { FindOneAuthorController } from '@/presentation/controller/author/find-one-author-controller'

export class FindOneAuthorComposer {
  static route() {
    const sequelizeLoadAuthorByIdRepository =
      new SequelizeLoadAuthorByIdRepository(sequelizeClient)
    const findOneAuthorUseCaseImpl = new FindOneAuthorUseCaseImpl({
      loadAuthorByIdRepository: sequelizeLoadAuthorByIdRepository,
    })
    const findOneAuthorController = new FindOneAuthorController({
      findOneAuthorUseCase: findOneAuthorUseCaseImpl,
    })
    return findOneAuthorController
  }
}
