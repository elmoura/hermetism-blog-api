"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const storage_1 = require("@google-cloud/storage");
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const storage = new storage_1.Storage({
    keyFilename: path_1.default.join(__dirname, '..', '..', 'Blog-693d8f0367f5.json'),
    projectId: process.env.GCLOUD_PROJECT_ID
});
exports.storage = storage;
