import { Express } from 'express'
import { serve, setup } from 'swagger-ui-express'
import swaggerDocument from '../../../swagger.json'
export const setupDocs = (app: Express) => {
  app.use('/api-docs', serve, setup(swaggerDocument))
}
