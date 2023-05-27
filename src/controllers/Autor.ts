import { Author as autor } from '@/infra/database/sequelize/models/author'

export class Autor {
  async FindOne(req, res) {
    try {
      const resultado = await autor.findByPk(req.params.id)
      res.json(resultado)
    } catch (error) {
      res.json({ error })
    }
  }

  async FindAll(req, res) {
    try {
      const resultado = await autor.findAll()
      res.json(resultado)
    } catch (error) {
      res.json({ error })
    }
  }

  async FindRelations(req, res) {
    try {
      const resultado = await autor.findByPk(req.params.id, {
        include: 'livros',
      })
      res.json(resultado)
    } catch (error) {
      res.json({ error })
    }
  }

  async Create(req, res) {
    try {
      const resultado = await autor.create(req.body)
      res.json(resultado)
    } catch (error) {
      res.json({ error })
    }
  }

  async Update(req, res) {
    try {
      const resultado = await autor.update(req.body, { where: req.params })
      res.json(resultado)
    } catch (error) {
      res.json({ error })
    }
  }

  async Delete(req, res) {
    try {
      const resultado = await autor.destroy({ where: req.params })
      res.json(resultado)
    } catch (error) {
      res.json({ error })
    }
  }
}
