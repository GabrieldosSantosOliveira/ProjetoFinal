let { autor } = require("../../models");

class Autor {
  async FindOne(req, res) {
    let resultado = await autor.findByPk(req.params.id)
    res.json(resultado)
  }
  async FindAll(req, res) {
    let resultado = await autor.findAll()
    res.json(resultado)
  }
  async FindRelations(req, res) {
    let resultado = await autor.findByPk(req.params.id, { include: "livros" })
    res.json(resultado)
  }
  async Create(req, res) {
    let resultado = await autor.create(req.body)
    res.json(resultado)
  }
  async Update(req, res) {
    let resultado = await autor.update(req.body, { where: req.params })
    res.json(resultado)
  }
  async Delete(req, res) {
    let resultado = await autor.destroy({ where: req.params })
    res.json(resultado)
  }
}
module.exports = { Autor }