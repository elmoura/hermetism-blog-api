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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const multer_2 = require("../config/multer");
const ListPosts_1 = require("../useCases/Posts/ListPosts");
const CreatePost_1 = require("../useCases/Posts/CreatePost");
const CreatePostImages_1 = require("../useCases/Posts/CreatePostImages");
const paginationHandler_1 = require("../shared/middlewares/paginationHandler");
const postRoutes = express_1.Router();
exports.postRoutes = postRoutes;
postRoutes.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () { return CreatePost_1.createPostController.handle(request, response); }));
postRoutes.post('/:postId/images', multer_1.default(multer_2.multerConfig).array('image', 10), (request, response) => __awaiter(void 0, void 0, void 0, function* () { return CreatePostImages_1.createPostImagesController.handle(request, response); }));
postRoutes.get('/', paginationHandler_1.paginationHandler, (request, response) => __awaiter(void 0, void 0, void 0, function* () { return ListPosts_1.listPostsController.handle(request, response); }));
