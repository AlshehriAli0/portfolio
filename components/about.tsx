"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <motion.section
        className=" max-w-[40rem] text-center leading-8 hidden sm:block"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.215 }}
      >
        <SectionHeading>About Me</SectionHeading>

        <p className="mb-3">
          {" "}
          Currently pursuing a bachelor&apos;s degree in{" "}
          <span className="font-medium">Computer Science</span> at Imam
          Abdulrahman Bin Faisal University, my passion for software engineering
          drives me to continuously expand my knowledge through courses and
          hands-on projects. I thrive on the challenge of problem-solving,
          finding immense satisfaction in overcoming complex issues. My
          expertise spans a versatile range, including{" "}
          <span className="font-medium">React, Next.js</span> for front-end
          frameworks, <span className="font-medium">MongoDB</span> and
          <span className="font-medium"> PostgreSQL</span> for databases,
          alongside proficiency in{" "}
          <span className="font-medium">TypeScript</span>. Additionally,
          I&apos;m skilled and well-competent in backend development, utilizing
          both <span className="font-medium">Flask</span> and{" "}
          <span className="font-medium">Express.js</span> to build robust APIs.
          Also capable of utilizing{" "}
          <span className="font-medium">Python, JavaScript</span> and{" "}
          <span className="font-medium">C++</span> programming languages to
          solve complex problems. My interests extend into the{" "}
          <span className="font-medium">
            machine learning, artificial intelligence,
          </span>{" "}
          and <span className="font-medium">data science</span> Space, where I
          aim to innovative modern solutions. Eager to dive deeper into backend
          technologies and explore the potential of AI.
        </p>
      </motion.section>

      {/* <motion.section
        className="max-w-[40rem] text-center leading-8 sm:hidden block"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.215 }}
      >
        <SectionHeading>About Me</SectionHeading>

        <p className="mb-3">
          <span className="font-medium">Computer Science</span> student at Imam
          Abdulrahman Bin Faisal University. Passionate about software
          engineering, I constantly expand my knowledge through courses and
          hands-on projects. Skilled in{" "}
          <span className="font-medium">React</span>,{" "}
          <span className="font-medium">Next.js</span>,
          <span className="font-medium"> MongoDB</span>,{" "}
          <span className="font-medium">PostgreSQL</span>, and{" "}
          <span className="font-medium">TypeScript</span> for front-end and
          database development. Proficient in backend development using{" "}
          <span className="font-medium">Flask</span> and{" "}
          <span className="font-medium">Express.js</span> to build robust APIs.
          Capable of utilizing <span className="font-medium">Python</span>,{" "}
          <span className="font-medium">JavaScript</span>, and{" "}
          <span className="font-medium">C++</span> for problem-solving.
          Interested in <span className="font-medium">machine learning</span>,{" "}
          <span className="font-medium">artificial intelligence</span>, and{" "}
          <span className="font-medium">data science</span>, aiming to innovate
          modern solutions. Eager to explore backend technologies further and
          delve into the potential of AI.
        </p>
      </motion.section> */}
    </>
  );
}
