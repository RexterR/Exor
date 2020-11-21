import { CustomError } from "./CustomError";

const msg: string = "Method Not Allowed";

export class MethodNotAllowed extends CustomError {
    statusCode = 405;

    constructor() {
        super(msg);
        Object.setPrototypeOf(this, MethodNotAllowed.prototype);
    }

    serializeError() {
        return [{ message: msg }];
    }
}
