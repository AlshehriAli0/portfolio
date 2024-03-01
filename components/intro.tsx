"use client";

import React from "react";
import ScrambleText from "./scramble-text";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import IntroButtons from "./intro-buttons";

export default function Intro() {
  const { ref } = useSectionInView({ sectionName: "Home", threshold: 0.4 });

  return (
    <section
      className="sm:mt-10 mt-2 max-w-[50rem] text-center scroll-mt-[100rem] bg-transparent  "
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center dark:text-slate-200 text-slate-900 ">
        <motion.h1
          className="mb-12 px-4 mt-2 sm:-mt-4 text-3xl font-medium !leading-[1.6] sm:text-4xl bg-transparent"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.4, type: "spring" }}
        >
          <article className="flex flex-col">
            <div>
              <span className="font-bold">Hello, I&apos;m Ali.</span> A
              <span className="font-bold"> Full-Stack Dev</span>, excelling in
              <span className="font-bold"> Back-End</span> with focus on
              <span className="font-bold"> AI and ML</span>. Core stack
              consisting of <span className=""></span>
            </div>
            <div className="font-bold dark:text-white text-black">
              <ScrambleText
                words={[
                  "Flask",
                  "JavaScript",
                  "Python",
                  "TypeScript",
                  "Node.js",
                  "Express.js",
                  "React.js",
                  "Next.js",
                  "MongoDb",
                  "PostgreSQL",
                  "Vercel",
                  "FastAPI",
                ]}
              />
            </div>
          </article>
          <IntroButtons />
        </motion.h1>
      </div>
    </section>
  );
}
