import 'reflect-metadata'
import 'es6-shim'
import { setupApp } from './config/setup-app'
import { env } from './config/env'

setupApp().then(({ app }) => {
  app.listen(env.APP_PORT, () => {
    console.log(`http://localhost:${env.APP_PORT}`)
  })
})
