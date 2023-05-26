import {setupApp} from './config/setup-app'
import {env} from './config/env'
const {app} = setupApp()

app.listen(env.APP_PORT, () => {
  console.log(`http://localhost:${env.APP_PORT}`);
});
