import { RemoveAuthorUseCaseImpl } from '@/app/use-cases/author/remove-author-use-case-impl'
import { SequelizeLoadAuthorByIdRepository } from '@/infra/database/sequelize/repositories/sequelize-load-author-by-id-repository'
import { SequelizeRemoveAuthorRepository } from '@/infra/database/sequelize/repositories/sequelize-remove-author-repository'
import { sequelizeClient } from '@/main/lib/sequelize-client'
import { RemoveAuthorController } from '@/presentation/controller/author/remove-author-controller'

export class RemoveAuthorComposer {
  static route() {
    const sequelizeRemoveAuthorRepository = new SequelizeRemoveAuthorRepository(
      sequelizeClient,
    )
    const sequelizeLoadAuthorByIdRepository =
      new SequelizeLoadAuthorByIdRepository(sequelizeClient)
    const removeAuthorUseCaseImpl = new RemoveAuthorUseCaseImpl({
      loadAuthorByIdRepository: sequelizeLoadAuthorByIdRepository,
      removeAuthorRepository: sequelizeRemoveAuthorRepository,
    })
    const removeAuthorController = new RemoveAuthorController({
      removeAuthorUseCase: removeAuthorUseCaseImpl,
    })
    return removeAuthorController
  }
}
