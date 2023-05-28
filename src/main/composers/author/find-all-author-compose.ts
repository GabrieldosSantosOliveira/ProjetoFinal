import { FindAllAuthorUseCaseImpl } from '@/app/use-cases/author/find-all-author-use-case-impl'
import { SequelizeLoadAuthorsRepository } from '@/infra/database/sequelize/repositories/sequelize-load-authors-repository'
import { sequelizeClient } from '@/main/lib/sequelize-client'
import { FindAllAuthorController } from '@/presentation/controller/author/find-all-author-controller'

export class FindAllAuthorComposer {
  static route() {
    const sequelizeLoadAuthorsRepository = new SequelizeLoadAuthorsRepository(
      sequelizeClient,
    )
    const findAllAuthorUseCaseImpl = new FindAllAuthorUseCaseImpl({
      loadAuthorsRepository: sequelizeLoadAuthorsRepository,
    })
    const findAllAuthorController = new FindAllAuthorController({
      findAllAuthorUseCase: findAllAuthorUseCaseImpl,
    })
    return findAllAuthorController
  }
}
