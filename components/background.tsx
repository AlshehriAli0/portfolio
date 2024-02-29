"use client";

import { useThemeContext } from "@/context/theme-context";
import clsx from "clsx";
import React from "react";

export default function Background() {
  const { theme } = useThemeContext();
  return (
    <div
      className={clsx(
        "absolute sm:mt-0 mt-16 top-0 z-[-2] h-screen w-screen bg-slate-950 bg-[radial-gradient(ellipse_80%_100%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]",
        { " hidden": theme === "light" }
      )}
    ></div>
  );
}
