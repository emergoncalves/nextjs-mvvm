"use client";
import { useAuthViewModel } from "@/features/auth/viewmodels/useAuthViewModel";
import { BackgroundLines } from "@/features/common/components/background-lines";
import { Button } from "@/features/common/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/features/common/components/ui/card";
import { Input } from "@/features/common/components/ui/input";
import { coreDI } from "@/features/core/di-container";
import React from "react";

export default function Login() {
  const { login, user, password, setUser, setPassword } = useAuthViewModel(
    coreDI.auth.authService
  );

  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-slate-900">
      <Card className="w-96 backdrop-blur-sm bg-black/10 py-8">
        <CardHeader className="py-4 flex justify-center w-full">
          <CardTitle className="text-white text-center">Login</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <form className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Username"
              className="text-white"
              value={user || ""}
              onChange={(e) => setUser(e.target.value)}
            />
            <Input
              type="password"
              className="text-white"
              placeholder="******"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="button"
              variant="secondary"
              onClick={() => login(user, password)}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </BackgroundLines>
  );
}
