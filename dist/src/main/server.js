"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setup_app_1 = require("./config/setup-app");
const env_1 = require("./config/env");
const { app } = (0, setup_app_1.setupApp)();
app.listen(env_1.env.PORT, () => {
    console.log(`http://localhost:${env_1.env.PORT}`);
});
