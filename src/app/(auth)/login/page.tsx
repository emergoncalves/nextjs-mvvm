"use client";
import { Button } from "@/features/common/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/features/common/components/ui/card";
import { Input } from "@/features/common/components/ui/input";
import { coreDI } from "@/features/core/di-container";
import { useAuthViewModel } from "@/features/auth/viewmodels/useAuthViewModel";
import { motion } from "framer-motion";
import { HeroHighlight } from "@/features/common/components/hero-highlight";

export default function Login() {
  const { login, user, password, setUser, setPassword } = useAuthViewModel(
    coreDI.auth.service
  );

  return (
    <HeroHighlight containerClassName="flex h-screen overflow-x-hidden overflow-y-hidden">
      <motion.div
        initial={{ opacity: 0.5, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center items-center h-screen w-full px-4 "
      >
        <Card className="w-11/12 md:w-96 py-8 backdrop-blur-sm dark:bg-black/10 bg-slate-300/10">
          <CardHeader className="py-4 flex justify-center w-full">
            <CardTitle className="dark:text-white text-black text-center">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <form className="flex flex-col gap-4">
              <Input
                type="text"
                placeholder="Username"
                className="dark:text-white text-black"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <Input
                type="password"
                className="dark:text-white text-black"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="button"
                variant="secondary"
                className="dark:text-black text-white dark:bg-white bg-black hover:bg-black/80 hover:dark:bg-white/80"
                onClick={() => login(user || "", password || "")}
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </HeroHighlight>
  );
}
