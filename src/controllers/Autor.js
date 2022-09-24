let { autor } = require("../../models");

class Autor {
  async FindOne(req, res) {
    try{
    let resultado = await autor.findByPk(req.params.id)
    res.json(resultado)
    } catch(error){
      res.json({error})
    }
  }
  async FindAll(req, res) {
    try{
    let resultado = await autor.findAll()
    res.json(resultado)
    } catch(error){
      res.json({error})
    }
  }
  async FindRelations(req, res) {
    try{
    let resultado = await autor.findByPk(req.params.id, { include: "livros" })
    res.json(resultado)
    } catch(error){
      res.json({error})
    }
  }
  async Create(req, res) {
    try{
    let resultado = await autor.create(req.body)
    res.json(resultado)
    } catch(error){
      res.json({error})
    }
  }
  async Update(req, res) {
    try{
    let resultado = await autor.update(req.body, { where: req.params })
    res.json(resultado)
    } catch(error){
      res.json({error})
    }
  }
  async Delete(req, res) {
    try{
    let resultado = await autor.destroy({ where: req.params })
    res.json(resultado)
    } catch(error){
      res.json({error})
    }
  }
}
module.exports = { Autor }