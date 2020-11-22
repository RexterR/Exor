import { CustomError } from "./CustomError";

const msg: string = "Doesn't found any content that conform to the criteria provided";

export class NotAcceptableError extends CustomError {
    statusCode = 406;

    constructor() {
        super(msg);
        Object.setPrototypeOf(this, NotAcceptableError.prototype);
    }

    serializeError() {
        return [{ message: msg }];
    }
}
