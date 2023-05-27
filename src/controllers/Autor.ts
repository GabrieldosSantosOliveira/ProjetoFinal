import { Author as autor } from '@/infra/database/sequelize/models/author'
import { Request, Response } from 'express'
export class Autor {
  async FindOne(req: Request, res: Response) {
    const resultado = await autor.findByPk(req.params.id)
    res.json(resultado)
  }

  async FindAll(req: Request, res: Response) {
    const resultado = await autor.findAll()
    res.json(resultado)
  }

  async FindRelations(req: Request, res: Response) {
    const resultado = await autor.findByPk(req.params.id, {
      include: 'livros',
    })
    res.json(resultado)
  }

  async Create(req: Request, res: Response) {
    const resultado = await autor.create(req.body)
    res.json(resultado)
  }

  async Update(req: Request, res: Response) {
    const resultado = await autor.update(req.body, { where: req.params })
    res.json(resultado)
  }

  async Delete(req: Request, res: Response) {
    const resultado = await autor.destroy({ where: req.params })
    res.json(resultado)
  }
}
