import React from "react";

import { FaGraduationCap } from "react-icons/fa6";

import mindboard from "/public/mindboard.png";
import analasis from "@/public/tech-data.png";
import todo from "@/public/todo.png";
import premiumprops from "@/public/premium-props.png";
import pyApp from "@/public/pyBAnk.png";
import { url } from "inspector";

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
  {
    title: "Bachelor of Computer Science",
    location: "Khobar, Eastern Province, KSA",
    description:
      "Started my university academic journey in 2022 as a Computer Science and IT student, currently undergoing studies for a Bachelor of Computer Science degree. Engaged in diverse coursework and practical experiences, including programming, database management, and information systems. Actively participated in collaborative projects, hackathons, and extracurricular activities and honing technical skills.",
    icon: React.createElement(FaGraduationCap),
    date: "2022",
  },
  
] as const;

export const projectsData = [
  {
    title: "MindBoard",
    description:
      "A user-friendly web app for seamless thought organization with features like note creation, sorting and account management, all in one place. ",
    tags: ["React", "Express.js", "MongoDB", "Tailwind", "Heroku"],
    imageUrl: mindboard,
    url: "https://www.mindboard.live/",
  },
  {
    title: "Tech Jobs Analysis ",
    description:
      "A Python program to analyze tech-related job postings on LinkedIn in KSA during Q1-Q2 2023.  The program identifies the most posted job titles and their percentages.",
    tags: ["Python", "matplotlib", "pandas"],
    imageUrl: analasis,
    url: "https://github.com/AlshehriAli0/Tech-Job-Analysis",
  },
  {
    title: "To-Do Web App",
    description:
      "A Web App project that offers seamless task management with session-based authentication. Leveraging Bootstrap, EJS, and MongoDB, giving a responsive design and data persistence.",
    tags: ["EJS", "CSS", "SASS", "MongoDB", "jQuery", "JavaScript"],
    imageUrl: todo,
    url: "https://www.todowebapp.com/",
  },
  ,
  {
    title: "Premium Properties",
    description:
      "Created a mock real-estate website to practice front-end development and UI design skills. Utilized Tailwind CSS for a sleek, modern, and functional design.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
    imageUrl: premiumprops,
    url: "https://alshehriali0.github.io/Tailwind-RealEstate-Website/",
  },
  {
    title: "GUI Banking App",
    description:
      "Developed a Python banking app for COMP123 course group project. Utilized Tkinter for GUI. Features: User registration/login, account details, withdrawals/deposits, responsive UI.",
    tags: ["Python", "Tkinter", "Pillow"],
    imageUrl: pyApp,
    url: "https://github.com/AlshehriAli0/Python-Banking-App",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "C++",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Heroku",
  "EJS",
  "Flask",
  "jQuery",
  "Postman",
  "Docker",
  "bootstrap",
  "Express.js",
  "SASS",
  "PostgreSQL",
  "Django",
  "Framer Motion",
] as const;
