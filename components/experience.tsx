"use client";

import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import { useThemeContext } from '@/context/theme-context';
import dynamic from "next/dynamic";


export default function Experience() {
  const { ref } = useSectionInView({
    sectionName: "Experience",
    threshold: 0.5,
  });
  const {theme} = useThemeContext();


  return (
    <section ref={ref} id="experience" className="scroll-mt-32">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="" className="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="group hover:scale-105 transition transform "
              contentStyle={{
                background:
                  theme === "light"
                    ? "rgb(241 245 249)"
                    : "rgb(255,255,255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid  #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light"
                    ? "rgb(241 245 249)"
                    : "rgb(255,255,255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold dark:text-slate-200 dark:group-hover:text-slate-100 text-lg group-hover:font-bold capitalize transition-all">
                {item.title}
              </h3>
              <p className="font-normal transition-all !mt-0 dark:text-slate-400 dark:group-hover:text-slate-100">
                {item.location}
              </p>
              <p className="!font-normal transition-all group-hover:text-slate-900 dark:text-slate-600 dark:group-hover:text-slate-300 text-slate-700 ">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
