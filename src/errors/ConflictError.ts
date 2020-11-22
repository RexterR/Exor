import { CustomError } from "./CustomError";

const msg: string = "Request conflict occurred";

export class ConflictError extends CustomError {
    statusCode = 407;

    constructor() {
        super(msg);
        Object.setPrototypeOf(this, ConflictError.prototype);
    }

    serializeError() {
        return [{ message: msg }];
    }
}
