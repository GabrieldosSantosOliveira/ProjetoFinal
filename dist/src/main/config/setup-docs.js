"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupDocs = void 0;
const swagger_ui_express_1 = require("swagger-ui-express");
const swagger_json_1 = __importDefault(require("../../../swagger.json"));
const setupDocs = (app) => {
    app.use("/api-docs", swagger_ui_express_1.serve, (0, swagger_ui_express_1.setup)(swagger_json_1.default));
};
exports.setupDocs = setupDocs;
