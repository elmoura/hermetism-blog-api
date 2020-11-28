import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';

export function validateObjectId(request: Request, response: Response, next: NextFunction) {
  const { _id } = request.params;

  const isIdValid = Types.ObjectId.isValid(_id);

  if (!isIdValid) {
    return response.status(400).json({ message: 'Requisição inválida' });
  }

  next();
}