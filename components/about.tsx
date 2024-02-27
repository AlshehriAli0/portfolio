"use client";

import React from "react";

import SectionHeading from "./section-heading";
import AboutMobile from "./about-mobile";
import AboutPc from "./about-pc";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView({ sectionName: "About", threshold: 0.4 });

  return (
    <>
      <section
        ref={ref}
        className=" max-w-[40rem] text-center leading-8 scroll-mt-36"
        id="about"
      >
        <SectionHeading>About Me</SectionHeading>
        <span className="sm:hidden block glass-bg rounded-lg p-4 transition-all">
          <AboutMobile />
        </span>
        <span className="hidden sm:block glass-bg rounded-lg p-4 transition-all">
          <AboutPc></AboutPc>
        </span>
      </section>
    </>
  );
}
