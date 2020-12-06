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
exports.usersRoutes = void 0;
const express_1 = require("express");
const validateObjectId_1 = require("../shared/middlewares/validateObjectId");
const CreateUser_1 = require("../useCases/Users/CreateUser");
const UpdateUser_1 = require("../useCases/Users/UpdateUser");
const usersRoutes = express_1.Router();
exports.usersRoutes = usersRoutes;
usersRoutes.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () { return CreateUser_1.createUserController.handle(request, response); }));
usersRoutes.put('/:_id', validateObjectId_1.validateObjectId, (request, response) => __awaiter(void 0, void 0, void 0, function* () { return UpdateUser_1.updateUserController.handle(request, response); }));
