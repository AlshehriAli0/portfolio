import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mindboard from "/public/mindboard.png";
import analasis from "@/public/tech-data.png";
import todo from "@/public/todo.png";
import premiumprops from "@/public/premium-props.png";
import pyApp from "@/public/pyBAnk.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
] as const;

export const projectsData = [
  {
    title: "MindBoard",
    description:
      "A user-friendly web app for seamless thought organization with features like note creation, sorting and account management, all in one place. ",
    tags: ["React", "Express.js", "MongoDB", "Tailwind", "Heroku"],
    imageUrl: mindboard,
  },
  {
    title: "Tech Jobs Analysis ",
    description:
      "A Python program to analyze tech-related job postings on LinkedIn in KSA during Q1-Q2 2023.  The program identifies the most posted job titles and their percentages.",
    tags: ["Python", "matplotlib", "pandas"],
    imageUrl: analasis,
  },
  {
    title: "To-Do Web App",
    description:
      "A Web App project that offers seamless task management with session-based authentication. Leveraging Bootstrap, EJS, and MongoDB, giving a responsive design and data persistence.",
    tags: ["EJS", "CSS", "SCSS", "MongoDB", "jQuery", "JavaScript"],
    imageUrl: todo,
  },
  ,
  {
    title: "premium properties",
    description:
      "Created a mock real-estate website to practice front-end development and UI design skills. Utilized Tailwind CSS for a sleek, modern, and functional design.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
    imageUrl: premiumprops,
  },
  {
    title: "GUI Banking App",
    description:
      "Developed a Python banking app for COMP123 course group project. Utilized Tkinter for GUI. Features: User registration/login, account details, withdrawals/deposits, responsive UI.",
    tags: ["Python", "Tkinter", "Pillow"],
    imageUrl: pyApp,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
