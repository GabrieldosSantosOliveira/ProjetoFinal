import { setupApp } from '@/main/config/setup-app'
import { sequelizeClient } from '@/main/lib/sequelize-client'
import { Express } from 'express'
import request from 'supertest'
let app: Express
describe('Json Parser', () => {
  beforeAll(async () => {
    app = (await setupApp()).app
  })
  afterAll(async () => {
    await sequelizeClient.connection.close()
  })
  it('should parser body', async () => {
    app.get('/test_json_parser', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .get('/test_json_parser')
      .send({ name: 'any_name' })
      .expect({ name: 'any_name' })
  })
})
