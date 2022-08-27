const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const { routerAutor } = require("./routes/autor")
const { routerLivro } = require("./routes/livro")
app.use(cors())
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.urlencoded({
  extended: true
}))
app.use(express.static(path.join(__dirname, "public")));
app.use(routerAutor);
app.use(routerLivro);

const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})