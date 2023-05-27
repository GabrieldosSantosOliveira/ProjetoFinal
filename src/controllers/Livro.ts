import { Book as livro } from '@/infra/database/sequelize/models/book'

export class Livro {
  async FindAll(req, res) {
    try {
      const resultado = await livro.findAll()
      res.json(resultado)
    } catch (error) {
      res.json({ error })
    }
  }

  async FindOne(req, res) {
    try {
      const resultado = await livro.findByPk(req.params.id)
      res.json(resultado)
    } catch (error) {
      res.json({ error })
    }
  }

  async FindRelations(req, res) {
    try {
      const resultado = await livro.findByPk(req.params.id, {
        include: 'autor',
      })
      res.json(resultado)
    } catch (error) {
      res.json({ error })
    }
  }

  async Create(req, res) {
    try {
      const resultado = await livro.create(req.body)
      res.json(resultado)
    } catch (error) {
      res.json({ error })
    }
  }

  async Update(req, res) {
    try {
      const resultado = await livro.update(req.body, {
        where: req.params,
      })
      res.json(resultado)
    } catch (error) {
      res.json({ error })
    }
  }

  async Delete(req, res) {
    try {
      const resultado = await livro.destroy({ where: req.params })
      res.json(resultado)
    } catch (error) {
      res.json({ error })
    }
  }
}
