"use client";

import React, { useEffect, useRef } from "react";

import { useInView } from "react-intersection-observer";

import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView({ sectionName: "Projects" });

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
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
