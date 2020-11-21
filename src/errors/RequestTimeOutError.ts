import { CustomError } from "./CustomError";
const msg: string = "Request Time Out";
export class RequestTimeOutError extends CustomError {
  statusCode = 408;
  constructor() {
    super(msg);
    Object.setPrototypeOf(this, RequestTimeOutError.prototype);
  }
  serializeError() {
    return [{ message: msg }];
  }
}
