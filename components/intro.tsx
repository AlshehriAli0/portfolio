"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

import { useSectionInView } from "@/lib/hooks";
import ScrambleText from "./scramble-text";
import { useActiveSecContext } from "@/context/active-sec-context";

export default function Intro() {
  const { setActiveSec, setLastClick } = useActiveSecContext();
  const { ref } = useSectionInView({ sectionName: "Home", threshold: 0.4 });
  const isSmallScreen = useMediaQuery({ maxWidth: 640 }); 

  return (
    <section
      className="sm:mt-10 max-w-[50rem] text-center scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center ">
        <div>
          <motion.h1
            className="mb-12 px-4 mt-2 sm:-mt-4 text-3xl font-medium !leading-[1.6] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hello, I&apos;m Ali Alshehri.</span> {}{" "}
            A <span className="font-bold">Full-Stack Developer</span>,
            specializing in{" "}
            <span className="font-bold">Back-End Development</span> with a
            strong focus on
            <span className="font-bold"> AI and ML</span>. Skilled with{" "}
            {isSmallScreen ? (
              <>
                <span className="font-bold">
                  {" "}
                  JavaScript, Python, TypeScript
                </span>{" "}
                and <span className="font-bold">C++</span>
              </>
            ) : (
              <ScrambleText
                words={["JavaScript", "Python", "TypeScript", "C++"]}
              />
            )}
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-3 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              prefetch={false}
              rel="NavLinkContact"
              href="#contact"
              className="group bg-slate-900 w-60  justify-center text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-slate-950 active:scale-100 transition"
              onClick={() => {
                setActiveSec("Contact");
                setLastClick(Date.now());
              }}
            >
              Contact me{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-5 transition" />
            </Link>

            <Link
              prefetch={false}
              className="group bg-white w-50 justify-center px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer border border-black/10 dark:bg-white/10"
              href="/cv.pdf"
              download
            >
              Download Resume{" "}
              <HiDownload className="opacity-70 group-hover:translate-y-1  transition" />
            </Link>
            <div className="flex gap-4 p-x-1">
              <Link
                prefetch={false}
                className="bg-white p-4 text-slate-700 dark:text-white/90 dark:bg-white/10 px-[1.1405rem] rounded-full flex items-center gap-2  focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
                href="https://www.linkedin.com/in/ali-alshehri-340b26284"
                target="_blank"
                rel="Linkedin"
              >
                <BsLinkedin />
              </Link>

              <Link
                prefetch={false}
                className="bg-white p-4 text-slate-700 dark:text-white/90 flex dark:bg-white/10 items-center gap-2 rounded-full text-[1.35rem] focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
                href="https://github.com/AlshehriAli0"
                target="_blank"
                rel="Github"
              >
                <FaGithubSquare />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
