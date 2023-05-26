"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParser = void 0;
const express_1 = require("express");
const jsonParser = () => (0, express_1.json)();
exports.jsonParser = jsonParser;
