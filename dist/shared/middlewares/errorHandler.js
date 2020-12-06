"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const AppError_1 = require("../errors/AppError");
function errorHandler(error, request, response, next) {
    if (error instanceof AppError_1.AppError) {
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }
    console.log(error);
    return response.status(500).json({
        message: 'Ops! Ocorreu um erro interno no servidor :(',
        stack: error.stack
    });
}
exports.errorHandler = errorHandler;
