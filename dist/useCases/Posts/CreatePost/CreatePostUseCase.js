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
exports.CreatePostUseCase = void 0;
const mongoose_1 = require("mongoose");
const Post_1 = require("../../../models/Post");
const Author_1 = require("../../../models/Author");
const AppError_1 = require("../../../shared/errors/AppError");
const slugify_1 = require("../../../shared/helpers/slugify");
class CreatePostUseCase {
    execute(createPostPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const isAuthorIdValid = mongoose_1.Types.ObjectId.isValid(createPostPayload.authorId);
            if (!isAuthorIdValid) {
                throw new AppError_1.AppError('O que você está tentando fazer hein?? Esse autor nem existe!');
            }
            const authorExists = yield Author_1.Author.findOne({ _id: createPostPayload.authorId });
            if (!authorExists) {
                throw new AppError_1.AppError('O que você está tentando fazer hein?? Esse autor nem existe!');
            }
            const friendlyPostUrl = slugify_1.slugify(createPostPayload.title);
            const postAlreadyExists = yield Post_1.Post.findOne({ url: friendlyPostUrl });
            if (postAlreadyExists) {
                throw new AppError_1.AppError('Puxa que pena! Esse nome é tão sensacional que alguém já pegou ele, sinto muito :(');
            }
            const post = new Post_1.Post(createPostPayload);
            post.url = friendlyPostUrl;
            const createdPost = yield post.save();
            return createdPost;
        });
    }
}
exports.CreatePostUseCase = CreatePostUseCase;
