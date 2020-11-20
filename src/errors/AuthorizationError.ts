import { CustomError } from "./CustomError";
export class AuthorizationError extends CustomError {
  statusCode = 401;
  constructor() {
    super("Authoriztion Error");
    Object.setPrototypeOf(this, AuthorizationError.prototype);
  }
  serializeError() {
    return [{ message: "Authorization Error" }];
  }
}