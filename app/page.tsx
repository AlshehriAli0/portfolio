import Intro from "@/components/intro";
import Divider from "@/components/divider";
import About from "@/components/about";

import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/projects"));
const Skills = dynamic(() => import("@/components/skills"));
const Experience = dynamic(() => import("@/components/experience"));
const Contact = dynamic(() => import("@/components/contact"));
const Footer = dynamic(() => import("@/components/footer"));

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Intro />

      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Contact />
      <Footer />
      <div className="bottom-right hidden sm:block"></div>
      <div className="top-left hidden sm:block"></div>
      <div className="bottom-left hidden sm:block"></div>
      <div className="top-right hidden sm:block"></div>
    </main>
  );
}
