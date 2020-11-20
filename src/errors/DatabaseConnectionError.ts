import { CustomError } from "./CustomError";
const reason = "Error connecting to Database";
export class DatabaseConnectionError extends CustomError {
  statusCode = 500;

  constructor() {
    super(reason);
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
  serializeError() {
    return [{ message: reason }];
  }
}
