import { ApplicationError } from "../protocols";

export function tooManyAppointmentsError(): ApplicationError {
  return {
    name: "tooManyAppointmentsError",
    message: "Só é permitido 1 agendamento por semana por usuário!",
  };
}
