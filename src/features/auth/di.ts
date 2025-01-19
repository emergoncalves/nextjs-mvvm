import { authLocalStorageService } from "./services/auth-service";
import { AuthService } from "./services/auth-service";

export const authDI = {
  authService: authLocalStorageService() as AuthService,
};

export type AuthDI = typeof authDI;
