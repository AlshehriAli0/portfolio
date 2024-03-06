
import React from "react";

export default function Background() {
  return (
    <div
      className={
        "absolute dark:block lg:hidden transition-all sm:mt-0 mt-16 top-0 z-[-2] h-screen w-screen bg-slate-100 opacity-20 dark:opacity-100 dark:bg-slate-950 bg-[radial-gradient(ellipse_80%_100%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      }
    ></div>
  );
}
