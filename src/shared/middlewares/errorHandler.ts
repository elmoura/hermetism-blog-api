import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';
export function errorHandler(error: Error, request: Request, response: Response, next: NextFunction): Response {
    if (error instanceof AppError) {
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