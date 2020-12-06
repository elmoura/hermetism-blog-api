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
exports.CreatePostImagesUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const Post_1 = require("../../../models/Post");
class CreatePostImagesUseCase {
    constructor(postImagesBucket) {
        this.postImagesBucket = postImagesBucket;
    }
    execute(postId, files) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdFilesArray = [];
            for (const file of files) {
                const createdFile = yield this.uploadFile(postId, file);
                createdFilesArray.push(createdFile);
            }
            return createdFilesArray;
        });
    }
    uploadFile(postId, file) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileKey = `${bcrypt_1.genSaltSync(10)}-${file.originalname}`;
            const image = this.postImagesBucket.file(fileKey);
            const imageStream = image.createWriteStream();
            const createdFile = {
                url: `https://storage.cloud.google.com/blog-storage/${fileKey}`,
                key: fileKey,
                fileName: file.originalname,
                size: file.size,
            };
            imageStream.on('error', (error) => { throw error; });
            imageStream.on('finish', () => __awaiter(this, void 0, void 0, function* () { return Post_1.Post.updateOne({ _id: postId }, { $push: { images: createdFile } }); }));
            imageStream.end(file.buffer);
            return createdFile;
        });
    }
}
exports.CreatePostImagesUseCase = CreatePostImagesUseCase;
