import express from 'express'
import { cors } from '../middlewares/cors'
import { jsonParser } from '../middlewares/json-parser'
import path from 'path'
import { setupDocs } from './setup-docs'
import { setupRoutes } from './setup-routes'
export const setupApp = () => {
  const app = express()
  app.use(cors)
  app.use(jsonParser)
  app.use(
    express.urlencoded({
      extended: true,
    }),
  )
  app.use(express.static(path.join(__dirname, 'public')))
  setupDocs(app)
  setupRoutes(app)
  return { app }
}
