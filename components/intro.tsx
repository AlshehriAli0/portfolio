"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import IntroButtons from "./intro-buttons";

const ScrambleText = React.lazy(() => import("./scramble-text"));

export default function Intro() {
  const { ref } = useSectionInView({ sectionName: "Home", threshold: 0.4 });

  return (
    <section
      className="sm:mt-10 mt-8 max-w-[50rem] text-center scroll-mt-[100rem] bg-transparent "
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center dark:text-slate-200 text-slate-900">
        <motion.h1
          className="sm:mb-12 mb-10 -mt-6 px-4 sm:-mt-4 text-[1.75rem] font-medium !leading-[1.6] sm:text-4xl bg-transparent"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          <article className="flex flex-col">
            <div>
              <span className="font-bold">Hello, I&apos;m Ali.</span> A
              <span className="font-bold"> Full-Stack Developer</span>,
              excelling in
              <span className="font-bold"> Back-End</span> with focus on
              <span className="font-bold"> AI and ML</span>. Core stack
              consisting of
            </div>
            <div className="font-bold dark:text-white text-black">
              <ScrambleText
                words={[
                  "JavaScript",
                  "Python",
                  "TypeScript",
                  "Node.js",
                  "Flask",
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
        </motion.h1>
      </div>
      <IntroButtons />
    </section>
  );
}
