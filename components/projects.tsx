"use client";

import React from "react";


import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView({ sectionName: "Projects", threshold: 0.2} );

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
      <p className="text-xs text-slate-500 text-center mt-6">
        More projects can be found on my github profile:{" "}
        <Link
          prefetch={false}
          rel="github account"
          className="underline font-semibold"
          href={"https://github.com/AlshehriAli0"}
        >
          AlshehriAli0
        </Link>
      </p>
    </section>
  );
}
