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
exports.UpdateUserController = void 0;
const AppError_1 = require("../../../shared/errors/AppError");
class UpdateUserController {
    constructor(updateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id } = request.params;
            const { firstName, lastName, phone, interests } = request.body;
            const updatedUser = yield this.updateUserUseCase.execute(_id, {
                firstName,
                lastName,
                phone,
                interests
            });
            if (!updatedUser) {
                const userNotFoundError = new AppError_1.AppError('Parece que esse usuário não existe', 400);
                return response.status(userNotFoundError.statusCode).json(userNotFoundError);
            }
            return response.json(updatedUser);
        });
    }
}
exports.UpdateUserController = UpdateUserController;
