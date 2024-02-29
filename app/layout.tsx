import "./globals.css";
import { Inter } from "next/font/google";

import ActiveSecContextProvider from "@/context/active-sec-context";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/theme-context";
import Header from "@/components/header";
import Theme from "@/components/theme";
import Background from "@/components/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ali | Personal Portfolio",
  description:
    "Ali Alshehri, A Full Stack Developer who loves to build things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth  ">
      <meta charSet="UTF-8" />
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <link rel="icon" href="/Aimg-white.png" />
      <body
        className={`${inter.className} bg-slate-50 text-slate-950 relative pt-28 sm:pt-36 dark:bg-slate-950 dark:text-slate-50 dark:text-opacity-90 transition-all `}
      >
        <ThemeContextProvider>
          <ActiveSecContextProvider>
            <Header />
            <Theme />
            {children}
            <Toaster position="top-right" />
            <Background />
          </ActiveSecContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
