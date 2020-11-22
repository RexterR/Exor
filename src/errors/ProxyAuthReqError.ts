import { CustomError } from "./CustomError";

const msg: string = "Proxy Authentication Required";

export class ProxyAuthReqError extends CustomError {
    statusCode = 407;

    constructor() {
        super(msg);
        Object.setPrototypeOf(this, ProxyAuthReqError.prototype);
    }

    serializeError() {
        return [{ message: msg }];
    }
}
