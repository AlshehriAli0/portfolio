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
      className="sm:mt-10 max-w-[50rem] text-center scroll-mt-[100rem] bg-transparent  "
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center dark:text-slate-200 text-slate-900 ">
        <motion.h1
          className="mb-12 px-4 mt-2 sm:-mt-4 text-3xl font-medium !leading-[1.6] sm:text-4xl bg-transparent"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.4, type: "spring"}}
        >
          <span className="font-bold">Hello, I&apos;m Ali.</span> A
          <span className="font-bold"> Full-Stack Dev</span>, specializing
          in
          <span className="font-bold"> Back-End Development</span> with 
          focus on
          <span className="font-bold"> AI and ML</span>. Competent with <span></span>
          <span className="font-bold dark:text-white text-black"> 
            <ScrambleText
              words={[
                "JavaScript",
                "Python",
                "TypeScript",
                "C++",
                "SQL",
                "NoSQL",
                "Docker",
                "AWS",
                "Node.js",
                "Express.js",
                "React.js",
                "Next.js",
                "MongoDb",
                "PostgreSQL",
                "Flask",
                "Pandas",
                "Numpy",
                "Matplotlib",
                "Postman",
              ]}
            />
          </span>
          <IntroButtons />
        </motion.h1>
      </div>
    </section>
  );
}
