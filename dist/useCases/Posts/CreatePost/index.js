"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostController = exports.createPostUseCase = void 0;
const CreatePostController_1 = require("./CreatePostController");
const CreatePostUseCase_1 = require("./CreatePostUseCase");
const createPostUseCase = new CreatePostUseCase_1.CreatePostUseCase();
exports.createPostUseCase = createPostUseCase;
const createPostController = new CreatePostController_1.CreatePostController(createPostUseCase);
exports.createPostController = createPostController;
