import { AuthService } from "../services/auth-service";
import { useToast } from "@/features/common/hooks/use-toast";

import {
  usePassword,
  useSetPassword,
  useSetUser,
  useUser,
} from "../store/AuthStore";

export const useAuthViewModel = (authService: AuthService) => {
  const user = useUser();
  const password = usePassword();
  const setUser = useSetUser();
  const setPassword = useSetPassword();
  const { toast } = useToast();

  const login = (user: string, password: string) => {
    try {
      const loginResult = authService.login(user, password);
      if (loginResult) {
        toast({ title: "Login successful" });
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Please check your credentials",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Login failed",
        description: "Please check your credentials",
      });
    } finally {
      setUser("");
      setPassword("");
    }
  };

  const logout = () => {
    authService.logout();
  };

  return {
    login,
    logout,
    user,
    password,
    setUser,
    toast,
    setPassword,
  };
};
