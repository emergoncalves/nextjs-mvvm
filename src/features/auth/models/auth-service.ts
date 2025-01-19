import { AuthModel } from "./auth-model";

export interface AuthService {
  login: ({ user, password }: AuthModel) => boolean;
  logout: () => void;
}
