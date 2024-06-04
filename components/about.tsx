"use client";

import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import dynamic from "next/dynamic";


const AboutMobile = dynamic(() => import("./about-mobile"));
const AboutPc = dynamic(() => import("./about-pc"));




export default function About() {
  const { ref } = useSectionInView({ sectionName: "About", threshold: 0.4 });
  const refArticle = useRef<HTMLDivElement>(null);
  const refHeading = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: refArticle,
    offset: ["0 0.9", "1.33 1"],
  });

  const { scrollYProgress: headingScrollYProgress } = useScroll({
    target: refHeading,
    offset: ["0 0.7", "0 0.5"],
  });

  const xProg = useTransform(scrollYProgress, [0, 0.6], [-250, 0]);
  const opacityProg = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const headingOpacityProg = useTransform(
    headingScrollYProgress,
    [0, 1],
    [0, 1]
  );

  return (
    <section
      ref={ref}
      className=" max-w-[40rem] text-center leading-8 sm:scroll-mt-36 scroll-mt-[5.5rem]"
      id="about"
    >
      <motion.div ref={refHeading} style={{ opacity: headingOpacityProg }}>
        <SectionHeading>About Me</SectionHeading>
      </motion.div>
      <motion.article
        ref={refArticle}
        style={{ opacity: opacityProg, x: xProg }}
      >
        <span className="sm:hidden dark:text-white block glass-bg rounded-lg p-4 transition-all">
          <AboutMobile />
        </span>
        <span className="hidden dark:text-white sm:block glass-bg rounded-lg p-4 transition-all">
          <AboutPc></AboutPc>
        </span>
      </motion.article>
    </section>
  );
}
