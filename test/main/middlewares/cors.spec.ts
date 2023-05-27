import { setupApp } from '@/main/config/setup-app'
import { sequelizeClient } from '@/main/lib/sequelize-client'
import { Express } from 'express'
import request from 'supertest'
let app: Express
describe('CORS', () => {
  beforeAll(async () => {
    app = (await setupApp()).app
  })
  afterAll(async () => {
    await sequelizeClient.connection.close()
  })
  it('should disable cors', async () => {
    app.get('/test_cors', (req, res) => {
      res.send('')
    })
    const res = await request(app).get('/test_cors')
    expect(res.headers['access-control-allow-origin']).toBe('*')
    expect(res.headers['access-control-allow-methods']).toBe('*')
    expect(res.headers['access-control-allow-headers']).toBe('*')
  })
})
