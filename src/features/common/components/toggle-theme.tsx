"use client";
import React from "react";
import { useTheme } from "next-themes";
import { LucideMoon, LucideSun } from "lucide-react";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="absolute right-4 top-4 p-4 z-50">
      {theme == "dark" ? (
        <LucideSun
          className="w-8 h-8 text-yellow-500"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        />
      ) : (
        <LucideMoon
          className="w-8 h-8 text-slate-500"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        />
      )}
    </div>
  );
}
