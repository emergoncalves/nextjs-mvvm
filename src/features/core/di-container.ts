import { AuthDI, authDI } from "../auth/di";

export interface CoreDI {
  auth: AuthDI;
}

export const coreDI: CoreDI = {
  auth: authDI,
};
