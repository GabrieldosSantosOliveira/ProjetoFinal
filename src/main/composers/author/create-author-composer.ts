import { CreateAuthorUseCaseImpl } from '@/app/use-cases/author/create-author-use-case-impl'
import { SequelizeCreateAuthorRepository } from '@/infra/database/sequelize/repositories/sequelize-create-author-repository'
import { sequelizeClient } from '@/main/lib/sequelize-client'
import { CreateAuthorController } from '@/presentation/controller/author/create-author-controller'

export class CreateAuthorComposer {
  static route() {
    const sequelizeCreateAuthorRepository = new SequelizeCreateAuthorRepository(
      sequelizeClient,
    )
    const createAuthorUseCase = new CreateAuthorUseCaseImpl({
      createAuthorRepository: sequelizeCreateAuthorRepository,
    })
    const createAuthorController = new CreateAuthorController({
      createAuthorUseCase,
    })
    return createAuthorController
  }
}
