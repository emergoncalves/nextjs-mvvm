import { create } from "zustand";

interface AuthStore {
  user: string;
  password: string;
  setUser: (user: string) => void;
  setPassword: (password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  password: "",
  setUser: (user) => set({ user }),
  setPassword: (password) => set({ password }),
  logout: () => set({ user: "", password: "" }),
}));

export const useUser = () => useAuthStore((state) => state.user);
export const usePassword = () => useAuthStore((state) => state.password);
export const useSetUser = () => useAuthStore((state) => state.setUser);
export const useSetPassword = () => useAuthStore((state) => state.setPassword);
export const useLogout = () => useAuthStore((state) => state.logout);
