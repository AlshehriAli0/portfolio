import React from "react";

export default function Footer() {
  const year: number = new Date().getFullYear();
  return (
    <footer className="mb-6 px-4 text-center text-slate-500">
      <small className="mb-2 text-xs font-semibold">
        &copy; {year} Ali Alshehri. All rights reserved.
      </small>
      <div className="text-xs">
        <span className="font-semibold">About this website: </span>built using
        React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React
        Email & Resend.
      </div>
    </footer>
  );
}
