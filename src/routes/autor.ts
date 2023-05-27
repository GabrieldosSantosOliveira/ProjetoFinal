import { Router } from 'express'
import { Autor } from '@/controllers/Autor'
const routerAutor = Router()
const Controller = new Autor()

routerAutor.get('/autor', Controller.FindAll)
routerAutor.get('/autor/:id', Controller.FindOne)
routerAutor.get('/autor/:id/livros', Controller.FindRelations)
routerAutor.post('/autor', Controller.Create)
routerAutor.put('/autor/:id', Controller.Update)
routerAutor.delete('/autor/:id', Controller.Delete)

export { routerAutor }
