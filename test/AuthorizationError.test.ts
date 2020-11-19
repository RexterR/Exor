import { AuthorizationError } from "../errors/AuthorizationError";
import { CustomError } from "../errors/CustomError";
const Message = "Authorization Error";
describe("AuthorizationError", () => {
  it("Error is instance of CustomError", () => {
    () => {
      try {
        throw new AuthorizationError();
      } catch (error) {
          
        const isInstance = error instanceof CustomError;
        expect(isInstance).toBeTruthy();
      }
    };
  }),
    it("Proper Status Code is sent", () => {
      () => {
        try {
          throw new AuthorizationError();
        } catch (error) {
          const statusCode = error.statusCode;
        
          expect(statusCode).toBe(401);
        }
      };
    }),
    it("Proper Message is sent", () => {
      () => {
        try {
          throw new AuthorizationError();
        } catch (error) {
          const errorMessage = error.serializeError();
          expect(errorMessage).toEqual([{ message: Message }]);
        }
      };
    });
});
