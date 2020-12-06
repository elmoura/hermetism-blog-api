import { Request, Response, NextFunction } from 'express';

export function paginationHandler(request: Request, response: Response, next: NextFunction) {
  const { limit, offset } = request.params;

  const treatedLimit = (!limit || Number(limit) > 100) ? 20 : Number(limit);
  const treatedOffset = (!offset) ? 0 : Number(offset);

  request.query.limit = String(treatedLimit);
  request.query.offset = String(treatedOffset);

  next();
}