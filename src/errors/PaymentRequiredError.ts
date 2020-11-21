//Early implementation of 402 error
import { CustomError } from "./CustomError";

const msg: string = "Payment Error";

export class PaymentRequiredError extends CustomError {
    statusCode = 402;

    constructor() {
        super(msg);
        Object.setPrototypeOf(this, PaymentRequiredError.prototype);
    }

    serializeError() {
        return [{ message: msg }];
    }
}
