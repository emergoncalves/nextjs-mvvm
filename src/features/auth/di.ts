import { authLocalStorageService } from "./services/auth-service";
import { AuthService } from "./models/auth-service";

export interface AuthContainer {
  service: AuthService;
}

export function createAuthContainer(): AuthContainer {
  return { service: authLocalStorageService() };
}

export type AuthDI = typeof createAuthContainer;
