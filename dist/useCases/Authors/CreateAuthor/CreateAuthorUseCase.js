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
exports.CreateAuthorUseCase = void 0;
const Author_1 = require("../../../models/Author");
const AppError_1 = require("../../../shared/errors/AppError");
class CreateAuthorUseCase {
    execute(createAuthorPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const authorAlreadyExists = yield Author_1.Author.findOne({ email: createAuthorPayload.email });
            if (authorAlreadyExists) {
                throw new AppError_1.AppError('Parece que já existe um autor com esse e-mail :(');
            }
            const author = new Author_1.Author(createAuthorPayload);
            const createdAuthor = yield author.save();
            delete createdAuthor.password;
            return createdAuthor;
        });
    }
}
exports.CreateAuthorUseCase = CreateAuthorUseCase;
