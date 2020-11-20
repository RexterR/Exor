import { BadRequestError } from "../src/errors/BadRequestError";
import { CustomError } from "../src/errors/CustomError";
const Message = "Bad Request : Request failed";
describe("BadRequestError", () => {
  it("Error is instance of CustomError", () => {
    try {
      throw new BadRequestError(Message);
    } catch (error) {
      const isInstance = error instanceof CustomError;

      expect(isInstance).toBeTruthy();
    }
  }),
    it("Proper Status Code is sent", () => {
      try {
        throw new BadRequestError(Message);
      } catch (error) {
        const statusCode = error.statusCode;
        expect(statusCode).toBe(400);
      }
    }),
    it("Proper Message is sent", () => {
      try {
        throw new BadRequestError(Message);
      } catch (error) {
        const errorMessage = error.serializeError();
        expect(errorMessage).toEqual([{ message: Message }]);
      }
    });
});
