"use client";

import React from "react";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import SectionHeading from "./section-heading";
import dynamic from "next/dynamic";

const Project = dynamic(() => import("./project"));

export default function Projects() {
  const { ref } = useSectionInView({ sectionName: "Projects", threshold: 0.2 });

  return (
    <section ref={ref} id="projects" className="scroll-mt-36">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project: any, index) => (
          <React.Fragment key={index}>
            <Project
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              url={project.url}
            />
          </React.Fragment>
        ))}
      </div>
      <div className="text-xs text-slate-600 text-center mt-6">
        More projects can be found on my github profile: <span></span>
        <Link
          prefetch={false}
          rel="github account"
          className="underline font-semibold dark:hover:text-slate-500 transition"
          href={"https://github.com/AlshehriAli0"}
          target="_blank"
        >
          AlshehriAli0
        </Link>
      </div>
    </section>
  );
}
