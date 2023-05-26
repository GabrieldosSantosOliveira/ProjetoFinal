"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRoutes = void 0;
const autor_1 = require("./../../routes/autor");
const livro_1 = require("./../../routes/livro");
const setupRoutes = (app) => {
    app.use(autor_1.routerAutor);
    app.use(livro_1.routerLivro);
};
exports.setupRoutes = setupRoutes;
