import { ApplicationError } from "../protocols";

export function PastdataError(message: string): ApplicationError {
  return {
    name: "Invalid data Error",
    message,
  };
}
