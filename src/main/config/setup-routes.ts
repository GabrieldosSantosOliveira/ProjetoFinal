import {Express} from 'express'
import { routerAutor } from "./../../routes/autor";
import { routerLivro } from "./../../routes/livro";
export const setupRoutes = (app:Express) =>{
  app.use(routerAutor);
  app.use(routerLivro);
}