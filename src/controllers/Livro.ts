import { Book as livro } from '@/infra/database/sequelize/models/book'
import { Request, Response } from 'express'
export class Livro {
  async FindAll(req: Request, res: Response) {
    const resultado = await livro.findAll()
    res.json(resultado)
  }

  async FindOne(req: Request, res: Response) {
    const resultado = await livro.findByPk(req.params.id)
    res.json(resultado)
  }

  async FindRelations(req: Request, res: Response) {
    const resultado = await livro.findByPk(req.params.id, {
      include: 'autor',
    })
    res.json(resultado)
  }

  async Create(req: Request, res: Response) {
    const resultado = await livro.create(req.body)
    res.json(resultado)
  }

  async Update(req: Request, res: Response) {
    const resultado = await livro.update(req.body, {
      where: req.params,
    })
    res.json(resultado)
  }

  async Delete(req: Request, res: Response) {
    const resultado = await livro.destroy({ where: req.params })
    res.json(resultado)
  }
}
