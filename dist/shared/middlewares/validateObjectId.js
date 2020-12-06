"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateObjectId = void 0;
const mongoose_1 = require("mongoose");
function validateObjectId(request, response, next) {
    const { _id } = request.params;
    const isIdValid = mongoose_1.Types.ObjectId.isValid(_id);
    if (!isIdValid) {
        return response.status(400).json({ message: 'Requisição inválida' });
    }
    next();
}
exports.validateObjectId = validateObjectId;
