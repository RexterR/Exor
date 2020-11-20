import { NextFunction,Response,Request } from "express";

import { CustomError } from "../errors/CustomError";
export const errorHandler = () => (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeError() });
  }

  return res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
