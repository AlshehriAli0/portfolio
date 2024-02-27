"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function Theme() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      name="theme-toggle-button"
      rel="theme-toggle-button"
      className="fixed flex bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full items-center justify-center hover:scale-[1.15] active:scale-105 dark:bg-slate-950 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
