"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPostsController = exports.listPostsUseCase = void 0;
const ListPostsController_1 = require("./ListPostsController");
const ListPostsUseCase_1 = require("./ListPostsUseCase");
const listPostsUseCase = new ListPostsUseCase_1.ListPostsUseCase();
exports.listPostsUseCase = listPostsUseCase;
const listPostsController = new ListPostsController_1.ListPostsController(listPostsUseCase);
exports.listPostsController = listPostsController;
