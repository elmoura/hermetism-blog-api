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
exports.CreateUserUseCase = void 0;
const User_1 = require("../../../models/User");
const AppError_1 = require("../../../shared/errors/AppError");
class CreateUserUseCase {
    execute(userPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const userAlreadyExists = yield User_1.User.findOne({ email: userPayload.email });
            if (userAlreadyExists) {
                throw new AppError_1.AppError('Hmmm, parece que já existe um usuário com esse e-mail');
            }
            const user = new User_1.User(userPayload);
            const createdUser = yield user.save();
            return createdUser;
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
