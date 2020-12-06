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
exports.authorsRoutes = void 0;
const express_1 = require("express");
const CreateAuthor_1 = require("../useCases/Authors/CreateAuthor");
const authorsRoutes = express_1.Router();
exports.authorsRoutes = authorsRoutes;
authorsRoutes.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () { return CreateAuthor_1.createAuthorController.handle(request, response); }));
