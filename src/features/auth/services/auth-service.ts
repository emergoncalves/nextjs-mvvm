import { AuthModel } from "../models/auth-model";
import { AuthService } from "../models/auth-service";

export const authLocalStorageService = (): AuthService => {
  const login = ({ user, password }: AuthModel): boolean => {
    if (user === "admin" && password === "admin") {
      localStorage.setItem("user", user);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  return {
    login,
    logout,
  };
};
