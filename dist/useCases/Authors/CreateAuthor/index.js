"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthorController = exports.createAuthorUseCase = void 0;
const CreateAuthorController_1 = require("./CreateAuthorController");
const CreateAuthorUseCase_1 = require("./CreateAuthorUseCase");
const createAuthorUseCase = new CreateAuthorUseCase_1.CreateAuthorUseCase();
exports.createAuthorUseCase = createAuthorUseCase;
const createAuthorController = new CreateAuthorController_1.CreateAuthorController(createAuthorUseCase);
exports.createAuthorController = createAuthorController;
