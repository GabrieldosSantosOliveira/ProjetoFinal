import { Express, Router } from 'express'
import { routerAutor } from '@/routes/autor'
import { routerLivro } from '@/routes/livro'
import { readdirSync } from 'fs'
import { resolve } from 'path'
export const setupRoutes = async (app: Express) => {
  const router = Router()
  app.use(routerAutor)
  app.use(routerLivro)
  app.use('/api', router)
  const filenames = readdirSync(resolve(__dirname, '..', 'routes'))
  for (const file of filenames) {
    const route = await import(`../routes/${file}`)
    route.default(router)
  }
}
