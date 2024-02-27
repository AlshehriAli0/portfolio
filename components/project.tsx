"use client";

import React, { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";

type projectType = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  url: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: projectType) {
  // * Framer motion card animation config
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProg = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProg = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      className="group sm:mb-8 last:mb-0 sm:px-0 px-3"
      ref={ref}
      style={{ scale: scaleProg, opacity: opacityProg }}
    >
      <section className=" bg-slate-100 rounded-md max-w-[42rem] relative border border-black/5 overflow-hidden sm:pr-8 sm:h-[19rem] mb-3 group-even:sm:pl-8 hover:bg-slate-200 transition dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-3 sm:pt-10 sm:max-w-[55%] flex flex-col h-full group-even:sm:ml-[18rem] ">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex gap-3 justify-start items-center cursor-pointer"
          >
            <h3 className="text-2xl flex justify-left items-center gap-3 pb-1 font-semibold transition transform duration-[8000] group-hover:font-extrabold ">
              {title}
            </h3>
            <FaExternalLinkAlt className="mb-1" />
          </Link>
          <p className="mt-2 leading-relaxed text-[0.9rem] text-slate-700 dark:text-white/60 group-hover:text-slate-900 dark:group-hover:text-white  transition-all ">
            {description}
          </p>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto ">
            {tags.map((tags, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-white/[0.08] dark:text-white/80  dark:group-hover:text-white transition-all"
                key={index}
              >
                {tags}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          className="hidden sm:block absolute border border-black/15 top-8 -right-[23.5rem] w-[56.25rem] rounded-t-md shadow-2xl shadow-black group-even:right[initial] group-even:-left-[23.5rem] transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 "
        />
      </section>
    </motion.div>
  );
}
