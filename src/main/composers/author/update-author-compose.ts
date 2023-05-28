import { UpdateAuthorUseCaseImpl } from '@/app/use-cases/author/update-author-use-case-impl'
import { SequelizeLoadAuthorByIdRepository } from '@/infra/database/sequelize/repositories/sequelize-load-author-by-id-repository'
import { SequelizeSaveAuthorRepository } from '@/infra/database/sequelize/repositories/sequelize-save-author-repository'
import { sequelizeClient } from '@/main/lib/sequelize-client'
import { UpdateAuthorController } from '@/presentation/controller/author/update-author-controller'

export class UpdateAuthorComposer {
  static route() {
    const sequelizeSaveAuthorRepository = new SequelizeSaveAuthorRepository(
      sequelizeClient,
    )
    const sequelizeLoadAuthorByIdRepository =
      new SequelizeLoadAuthorByIdRepository(sequelizeClient)
    const updateAuthorUseCaseImpl = new UpdateAuthorUseCaseImpl({
      saveAuthorRepository: sequelizeSaveAuthorRepository,
      loadAuthorByIdRepository: sequelizeLoadAuthorByIdRepository,
    })
    const updateAuthorController = new UpdateAuthorController({
      updateAuthorUseCase: updateAuthorUseCaseImpl,
    })
    return updateAuthorController
  }
}
