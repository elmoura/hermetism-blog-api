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
const User_1 = require("../../../models/User");
describe('Create user use cases', () => {
    it('Should create user successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const userPayload = {
            firstName: 'Gabriel',
            lastName: 'Moura',
            email: 'test@mail.com',
            password: '12345678',
            phone: '40028922',
            interests: ['foo', 'test']
        };
        const createdUserResponse = yield supertest_1.default(app_1.app).post('/users').send(userPayload);
        expect(createdUserResponse.status).toBe(201);
        expect(createdUserResponse.body).toHaveProperty('_id');
        return User_1.User.deleteOne({ email: userPayload.email });
    }));
    it('Should return that user already exists', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const alreadyCreatedUser = {
                firstName: 'Gabriel',
                lastName: 'Moura',
                email: 'gabriel.moura.hue@gmail.com',
                password: '12345678',
                phone: '11991420521',
                interests: ['Tarot', 'Hermetismo', 'Umbanda', 'Cabala']
            };
            yield supertest_1.default(app_1.app).post('/users').send(alreadyCreatedUser);
        }
        catch (error) {
            const userAlreadyExistsMessage = 'Hmmm, parece que já existe um usuário com esse e-mail';
            console.log(error);
            expect(error.statusCode).toEqual(400);
            expect(error.message).toEqual(userAlreadyExistsMessage);
        }
    }));
});
