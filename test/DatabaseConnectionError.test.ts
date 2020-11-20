import { DatabaseConnectionError } from "../src/errors/DatabaseConnectionError";
import { CustomError } from "../src/errors/CustomError";
const Message = "Error connecting to Database";
describe("DatabaseConnectionError", () => {
  it("Error is instance of CustomError", () => {
 
      try {
        throw new DatabaseConnectionError();
      } catch (error) {
          
        const isInstance = error instanceof CustomError;
        expect(isInstance).toBeTruthy();
      }
  
  }),
    it("Proper Status Code is sent", () => {
      ``
        try {
          throw new DatabaseConnectionError();
        } catch (error) {
          const statusCode = error.statusCode;
        
          expect(statusCode).toBe(500);
        }
     
    }),
    it("Proper Message is sent", () => {
      
        try {
          throw new DatabaseConnectionError();
        } catch (error) {
          const errorMessage = error.serializeError();
          expect(errorMessage).toEqual([{ message: Message }]);
        }
      
    });
});
