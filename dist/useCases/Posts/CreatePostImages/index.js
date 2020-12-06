"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostImagesController = exports.createPostImagesUseCase = void 0;
const googleCloudStorage_1 = require("../../../database/googleCloudStorage");
const CreatePostImagesController_1 = require("./CreatePostImagesController");
const CreatePostImagesUseCase_1 = require("./CreatePostImagesUseCase");
const postImagesBucket = googleCloudStorage_1.storage.bucket('blog-storage');
const createPostImagesUseCase = new CreatePostImagesUseCase_1.CreatePostImagesUseCase(postImagesBucket);
exports.createPostImagesUseCase = createPostImagesUseCase;
const createPostImagesController = new CreatePostImagesController_1.CreatePostImagesController(createPostImagesUseCase);
exports.createPostImagesController = createPostImagesController;
