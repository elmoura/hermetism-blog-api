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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../../../app");
const updateUserPayload = {
    firstName: 'El Pistoleiro',
    lastName: 'Moura',
    phone: '40028922',
    interests: ['Xesque rownlies', 'tresken', 'bresken'],
};
test('Should update user successfully', () => __awaiter(void 0, void 0, void 0, function* () {
    const userId = '5fbd0484ce5b291fa44ad4ba';
    const updatedUserResponse = yield supertest_1.default(app_1.app)
        .put(`/users/${userId}`).
        send(updateUserPayload);
    expect(updatedUserResponse.status).toBe(200);
    expect(updatedUserResponse.body).toHaveProperty('_id');
}));
test('Should return that user does not exists', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invalidUserId = '5fbd0484ce5b291fa44ad4bb';
        yield supertest_1.default(app_1.app).put(`/users/${invalidUserId}`).send(updateUserPayload);
    }
    catch (error) {
        const userDontExistMessage = 'Parece que esse usuário não existe';
        expect(error.status).toBe(400);
        expect(error.body.message).toBe(userDontExistMessage);
    }
}));
test('Should return that the request is invalid when the ID is not a valid format', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invalidId = '123456';
        yield supertest_1.default(app_1.app).put(`/users/${invalidId}`).send(updateUserPayload);
    }
    catch (error) {
        const invalidRequestMessage = 'Requisição inválida';
        expect(error.status).toBe(400);
        expect(error.body.message).toBe(invalidRequestMessage);
    }
}));
