import { livro }  from "../../models";

class Livro {
  async FindAll(req, res) {
    try{
    let resultado = await livro.findAll();
    res.json(resultado)
    } catch(error){
      res.json({error})
    }
  }
  async FindOne(req, res) {
    try{
    let resultado = await livro.findByPk(req.params.id)
    res.json(resultado)
    } catch(error){
      res.json({error})
    }
  }
  async FindRelations(req, res) {
    try{
    let resultado = await livro.findByPk(req.params.id, { include: "autor" })
    res.json(resultado)
    } catch(error){
      res.json({error})
    }
  }
  async Create(req, res) {
    try{
    let resultado = await livro.create(req.body)
    res.json(resultado)
    } catch(error){
      res.json({error})
    }
  }
  async Update(req, res) {
    try{
    let resultado = await livro.update(req.body, {
      where: req.params
    })
    res.json(resultado)
  } catch(error){
    res.json({error})
  }
  }
  async Delete(req, res) {
    try{
    let resultado = await livro.destroy({ where: req.params })
    res.json(resultado)
    } catch(error){
      res.json({error})
    }
  }
}

module.exports = { Livro };