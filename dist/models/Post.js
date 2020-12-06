"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = exports.Post = void 0;
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    authorId: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    tags: {
        type: Array
    },
    images: [{
            image_id: mongoose_1.Schema.Types.ObjectId,
            url: String,
            fileName: String,
            key: String,
            size: Number,
        }]
}, { timestamps: true });
exports.PostSchema = PostSchema;
const Post = mongoose_1.model('Post', PostSchema);
exports.Post = Post;
