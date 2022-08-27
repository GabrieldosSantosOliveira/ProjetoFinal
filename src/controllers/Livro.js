let { livro } = require("../../models");

class Livro {
  async FindAll(req, res) {
    let resultado = await livro.findAll();
    res.json(resultado)
  }
  async FindOne(req, res) {
    let resultado = await livro.findByPk(req.params.id)
    res.json(resultado)
  }
  async FindRelations(req, res) {
    let resultado = await livro.findByPk(req.params.id, { include: "autor" })
    res.json(resultado)
  }
  async Create(req, res) {
    let resultado = await livro.create(req.body)
    res.json(resultado)
  }
  async Update(req, res) {
    let resultado = await livro.update(req.body, {
      where: req.params
    })
    res.json(resultado)
  }
  async Delete(req, res) {
    let resultado = await livro.destroy({ where: req.params })
    res.json(resultado)
  }
}

module.exports = { Livro };