
import "./globals.css";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import ActiveSecContextProvider from "@/context/active-sec-context";
import { Toaster } from "react-hot-toast";
import Theme from "@/components/theme";
import ThemeContextProvider from "@/context/theme-context";

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
    <html lang="en" className="!scroll-smooth">
      <link rel="icon" href="/Aimg-white.png" />
      <body
        className={`${inter.className} bg-slate-50 text-slate-950 relative pt-28 sm:pt-36 dark:bg-slate-950 dark:text-slate-50 dark:text-opacity-90 transition-all`}
      >
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[12rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
         sm:w-[68.75rem] dark:bg-[#94626394] transition-all"
        ></div>

        <div className="bg-[#d4dbff] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-27.5rem] xl:left-[-15rem] 2xl:left-[-10rem] dark:bg-[#67639495] transition-all"></div>

        <div
          className="bg-[#AFEEEE] absolute top-[40rem] -z-20 right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
         sm:w-[50.75rem] dark:bg-[#2165658b] transition-all"
        ></div>

        <div
          className="bg-[#FFDAB9] absolute top-[50rem] md:top-[60rem] -z-10 left-[-35rem] md:left-[-20rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]
         dark:bg-[#6521216e] transition-all"
        ></div>

        <ThemeContextProvider>
          <ActiveSecContextProvider>
              <Header />
              {children}
              <Theme />
              <Toaster position="top-right" />
        
          </ActiveSecContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
