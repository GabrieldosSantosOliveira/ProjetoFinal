let express = require("express");
let {autor, livro} = require("./models");
let app = express();
const path = require("path");
let cors = require('cors')
app.use(cors())
app.use((req, res, next) => {
   console.log("Acessou o servidor")
  res.header("Access-Control-Allow-Origin", "*")
  app.use(cors());
  next()
})
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}))
app.use(express.static(path.join(__dirname, "public")));

app.get("/autor", async function(req,res){
  let resultado = await autor.findAll()
  res.json(resultado)
})
app.get("/autor/:id", async function(req,res){
  let resultado = await autor.findByPk(req.params.id)
  res.json(resultado)
})
app.get("/autor/:id/livros", async function(req,res){
  let resultado = await autor.findByPk(req.params.id, {include:"livros"})
  res.json(resultado)
})
app.post("/autor", async function(req,res){
    console.log(req.body)
  let resultado = await autor.create(req.body)
  res.json(resultado)
})
app.put("/autor/:id", async (req,res) =>{
  let resultado = await autor.update(req.body,{where:req.params})
  res.json(resultado)
})
app.delete("/autor/:id", async (req,res) =>{
  let resultado = await autor.destroy({where:req.params})
  res.json(resultado)
})
app.get("/livros", async (req,res) => {
  let resultado = await livro.findAll();
  res.json(resultado)
})
app.get("/livros/:id", async (req,res) => {
  let resultado = await livro.findByPk(req.params.id)
  res.json(resultado)
    res.json(e)
})
app.get("/livros/:id/autor", async (req,res) => {
  try{
  let resultado = await livro.findByPk(req.params.id, {include: "autor"})
  res.json(resultado)
  } catch(e){
    res.json(e)
  }
})
app.post("/livros", async(req, res) =>{
  let resultado =  await livro.create(req.body)
  res.json(resultado)
})
app.put("/livros/:id", async (req, res) => {
  let resultado = await livro.update(req.body, {
    where:req.params
  })
  res.json(resultado)
})
app.delete("/livros/:id", async(req,res) => {
  let resultado = await livro.destroy({where:req.params})
  res.json(resultado)
})
app.listen(3500,() => {
  console.log("Eu estou cansado")
})