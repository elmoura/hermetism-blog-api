"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostImageSchema = void 0;
const mongoose_1 = require("mongoose");
const PostImageSchema = new mongoose_1.Schema({
    image_id: {
        type: mongoose_1.Schema.Types.ObjectId
    },
    url: {
        type: String
    },
    size: {
        type: Number
    }
});
exports.PostImageSchema = PostImageSchema;
