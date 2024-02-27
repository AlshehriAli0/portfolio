"use client";

import React from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaSass,
  FaPython,
  FaAws
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiDjango,
  SiDocker,
  SiBootstrap,
  SiHeroku,
  SiFlask,
  SiJquery,
  SiPostman,
  SiMongodb,
} from "react-icons/si";

import { TbBrandCpp, TbBrandFramerMotion } from "react-icons/tb";

import { LuFileJson } from "react-icons/lu";

import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import {motion } from 'framer-motion';



const skillIcons: any = {
  HTML: <FaHtml5 />,
  CSS: <FaCss3 />,
  JavaScript: <FaJs />,
  Python: <FaPython />,
  "C++": <TbBrandCpp />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Node.js": <FaNodeJs />,
  Git: <FaGit />,
  Tailwind: <SiTailwindcss />,
  MongoDB: <SiMongodb />,
  Heroku: <SiHeroku />,
  EJS: <LuFileJson />,
  Flask: <SiFlask />,
  jQuery: <SiJquery />,
  Postman: <SiPostman />,
  Docker: <SiDocker />,
  bootstrap: <SiBootstrap />,
  SASS: <FaSass />,
  "Express.js": <SiExpress />,
  PostgreSQL: <SiPostgresql />,
  Django: <SiDjango />,
  "Framer Motion": <TbBrandFramerMotion />,
  "AWS":<FaAws/>
};

const fadeInVarient = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView({ sectionName: "Skills", threshold: 0.3 });

  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-[52rem] scroll-mt-32 text-center"
    >
      <SectionHeading>Tools & Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center items-center gap-2 text-lg text-slate-800 ">
        {skillsData.map((skill: string, index: number) => (
          <motion.li
            className="bg-white dark:bg-white/15 dark:text-white/90 flex items-center border border-black/10 rounded-xl px-5 py-3 transition-all motion-safe"
            key={index}
            variants={fadeInVarient}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
       
            {skillIcons[skill] ? (
              <span className="mr-2 text-xl">{skillIcons[skill]}</span>
            ) : null}
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
