import Intro from "@/components/intro";
import Divider from "@/components/divider";
import d from "next/dynamic";

const Projects = d(() => import("@/components/projects"));
const Skills = d(() => import("@/components/skills"));
const Experience = d(() => import("@/components/experience"));
const Contact = d(() => import("@/components/contact"));
const Footer = d(() => import("@/components/footer"));
const About = d(() => import("@/components/about"));

export const dynamic = "force-static";

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
      <div className="bottom-right hidden 2xl:block"></div>
      <div className="top-left hidden 2xl:block"></div>
      <div className="bottom-left hidden 2xl:block"></div>
      <div className="top-right hidden 2xl:block"></div>
    </main>
  );
}
