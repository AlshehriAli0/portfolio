"use client";

import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useActiveSecContext } from "@/context/active-sec-context";
import SectionHeading from "./section-heading";
import AboutMobile from "./about-mobile";
import AboutPc from "./about-pc";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView({ sectionName: "About", threshold: 0.4 });

  return (
    <>
      <motion.section
        ref={ref}
        className=" max-w-[40rem] text-center leading-8 scroll-mt-36 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.215 }}
        id="about"
      >
        <SectionHeading>About Me</SectionHeading>
        <span className="sm:hidden block">
          <AboutMobile />
        </span>
        <span className="hidden sm:block">
          <AboutPc></AboutPc>
        </span>
      </motion.section>
    </>
  );
}
