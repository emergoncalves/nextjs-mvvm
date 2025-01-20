import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  user: string;
  password: string;
  setUser: (user: string) => void;
  loginResult: boolean;
  setLoginResult: (loginResult: boolean) => void;
  setPassword: (password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: "",
      password: "",
      setUser: (user) => set({ user }),
      setPassword: (password) => set({ password }),
      loginResult: false,
      setLoginResult: (loginResult) => set({ loginResult }),
      logout: () => set({ user: "", password: "" }),
    }),
    {
      name: "auth",
    }
  )
);

export const useUser = () => useAuthStore((state) => state.user);
export const usePassword = () => useAuthStore((state) => state.password);
export const useSetUser = () => useAuthStore((state) => state.setUser);
export const useSetPassword = () => useAuthStore((state) => state.setPassword);
export const useLogout = () => useAuthStore((state) => state.logout);
export const useLoginResult = () => useAuthStore((state) => state.loginResult);
export const useSetLoginResult = () =>
  useAuthStore((state) => state.setLoginResult);
