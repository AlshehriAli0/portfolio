"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import React from "react";
import { useActiveSecContext } from "@/context/active-sec-context";

export default function IntroButtons() {
  const { setActiveSec, setLastClick } = useActiveSecContext();

  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-center items-center gap-3 px-4 text-lg font-medium sm:mt-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3 }}
    >
      <Link
        prefetch={false}
        rel="NavLinkContact"
        href="#contact"
        className="group bg-slate-900 w-60  justify-center text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-slate-950 dark:hover:bg-slate-800 active:scale-100 transition"
        onClick={() => {
          setActiveSec("Contact");
          setLastClick(Date.now());
        }}
      >
        Contact me
        <BsArrowRight className="opacity-70 group-hover:translate-x-5 transition" />
      </Link>

      <Link
        prefetch={false}
        className="group bg-white w-50 justify-center px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:hover:bg-white/[0.17]"
        href="https://utfs.io/f/9b1c3bc3-b147-4312-bf40-148648770dbf-7jsb4d.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
        <HiDownload className="opacity-70 group-hover:translate-y-1  transition" />
      </Link>
      <div className="flex gap-4 p-x-1">
        <Link
          prefetch={false}
          className="bg-white p-4 text-slate-700 dark:text-white/90 dark:bg-white/10 px-[1.1405rem] rounded-full flex items-center gap-2  focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:hover:bg-white/[0.17]"
          href="https://www.linkedin.com/in/ali-alshehri-340b26284"
          target="_blank"
          aria-label="linkedin"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </Link>

        <Link
          prefetch={false}
          className="bg-white p-4 text-slate-700 dark:text-white/90 flex dark:bg-white/10 items-center gap-2 rounded-full text-[1.35rem] focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:hover:bg-white/[0.17]"
          aria-label="Github"
          href="https://github.com/AlshehriAli0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </Link>
      </div>
    </motion.div>
  );
}
