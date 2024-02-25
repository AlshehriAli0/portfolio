"use client";

import React, { useState } from "react";
import type { SectionName } from "@/lib/types";


type ActiveSecContextType = {
  activeSec: SectionName;
  setActiveSec: React.Dispatch<React.SetStateAction<SectionName>>;
  lastClick: number;
  setLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSecContext =
  React.createContext<ActiveSecContextType | null>(null);

export default function ActiveSecContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSec, setActiveSec] = useState<SectionName>("Home");
  const [lastClick, setLastClick] = useState(0);

  return (
    <ActiveSecContext.Provider
      value={{ activeSec, setActiveSec, lastClick, setLastClick }}
    >
      {children}
    </ActiveSecContext.Provider>
  );
}

export function useActiveSecContext() {
  const context = React.useContext(ActiveSecContext);
  if (!context) {
    throw new Error("useActiveSec must be used within a ActiveSecProvider");
  }
  return context;
}
