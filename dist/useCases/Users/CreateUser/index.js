"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = exports.createUserUseCase = void 0;
const CreateUserController_1 = require("./CreateUserController");
const CreateUserUseCase_1 = require("./CreateUserUseCase");
const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase();
exports.createUserUseCase = createUserUseCase;
const createUserController = new CreateUserController_1.CreateUserController(createUserUseCase);
exports.createUserController = createUserController;
