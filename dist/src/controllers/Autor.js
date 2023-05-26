"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
class Autor {
    FindOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let resultado = yield models_1.autor.findByPk(req.params.id);
                res.json(resultado);
            }
            catch (error) {
                res.json({ error });
            }
        });
    }
    FindAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let resultado = yield models_1.autor.findAll();
                res.json(resultado);
            }
            catch (error) {
                res.json({ error });
            }
        });
    }
    FindRelations(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let resultado = yield models_1.autor.findByPk(req.params.id, { include: "livros" });
                res.json(resultado);
            }
            catch (error) {
                res.json({ error });
            }
        });
    }
    Create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let resultado = yield models_1.autor.create(req.body);
                res.json(resultado);
            }
            catch (error) {
                res.json({ error });
            }
        });
    }
    Update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let resultado = yield models_1.autor.update(req.body, { where: req.params });
                res.json(resultado);
            }
            catch (error) {
                res.json({ error });
            }
        });
    }
    Delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let resultado = yield models_1.autor.destroy({ where: req.params });
                res.json(resultado);
            }
            catch (error) {
                res.json({ error });
            }
        });
    }
}
module.exports = { Autor };
