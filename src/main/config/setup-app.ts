import express from 'express'
import { cors } from '../middlewares/cors'
import { jsonParser } from '../middlewares/json-parser'
import { setupDocs } from './setup-docs'
import { setupRoutes } from './setup-routes'
import { logger } from '../middlewares/logger'
export const setupApp = async () => {
  const app = express()
  app.disable('x-powered-by')
  app.use(cors)
  app.use(jsonParser)
  app.use(logger)
  setupDocs(app)
  await setupRoutes(app)
  return { app }
}
