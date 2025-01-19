"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LucideMoon, LucideSun } from "lucide-react";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute right-4 top-4 p-4 z-50">
      {theme === "dark" ? (
        <LucideSun
          className="w-6 h-6 text-yellow-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <LucideMoon
          className="w-6 h-6 text-slate-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
