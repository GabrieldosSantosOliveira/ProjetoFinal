import { Router } from 'express'
import { Livro } from '@/controllers/Livro'
const routerLivro = Router()

const Controller = new Livro()
routerLivro.get('/livros', Controller.FindAll)
routerLivro.get('/livros/:id', Controller.FindOne)
routerLivro.get('/livros/:id/autor', Controller.FindRelations)
routerLivro.post('/livros', Controller.Create)
routerLivro.put('/livros/:id', Controller.Update)
routerLivro.delete('/livros/:id', Controller.Delete)

export { routerLivro }
