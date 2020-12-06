"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserController = exports.updateUserUseCase = void 0;
const UpdateUserUseCase_1 = require("./UpdateUserUseCase");
const UpdateUserController_1 = require("./UpdateUserController");
const updateUserUseCase = new UpdateUserUseCase_1.UpdateUserUseCase();
exports.updateUserUseCase = updateUserUseCase;
const updateUserController = new UpdateUserController_1.UpdateUserController(updateUserUseCase);
exports.updateUserController = updateUserController;
