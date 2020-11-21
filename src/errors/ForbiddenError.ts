import { CustomError } from "./CustomError";

const msg: string = "requested resource forbidden";

export class ForbiddenError extends CustomError {
    statusCode = 403;

    constructor() {
        super(msg);
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }

    serializeError() {
        return [{ message: msg, }];
    }
}
