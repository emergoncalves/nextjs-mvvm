export interface AuthService {
  login: (user: string, password: string) => boolean;
  logout: () => void;
}

export const authLocalStorageService = (): AuthService => {
  const login = (user: string, password: string): boolean => {
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
