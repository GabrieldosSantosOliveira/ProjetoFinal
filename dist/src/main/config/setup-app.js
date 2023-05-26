"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = require("../middlewares/cors");
const json_parser_1 = require("../middlewares/json-parser");
const path_1 = __importDefault(require("path"));
const setup_docs_1 = require("./setup-docs");
const setupApp = () => {
    const app = (0, express_1.default)();
    app.use(cors_1.cors);
    app.use(json_parser_1.jsonParser);
    app.use(express_1.default.urlencoded({
        extended: true,
    }));
    app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
    (0, setup_docs_1.setupDocs)(app);
    (0, setup_docs_1.setupDocs)(app);
    return { app };
};
exports.setupApp = setupApp;
