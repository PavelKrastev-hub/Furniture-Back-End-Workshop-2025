import { getErrorMessage } from "../utils/errorUtils.js";

export function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 400;
    const message = getErrorMessage(err) || 'Something went wrong!'

    res.statusCode(statusCode).json(message);
}