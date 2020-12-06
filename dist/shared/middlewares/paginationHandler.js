"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationHandler = void 0;
function paginationHandler(request, response, next) {
    const { limit, offset } = request.params;
    const treatedLimit = (!limit || Number(limit) > 100) ? 20 : Number(limit);
    const treatedOffset = (!offset) ? 0 : Number(offset);
    request.query.limit = String(treatedLimit);
    request.query.offset = String(treatedOffset);
    next();
}
exports.paginationHandler = paginationHandler;
