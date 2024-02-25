import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
};

function Project({
  title,
  description,
  tags,
  imageUrl,
}: {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}) {
  return (
    <section className="group bg-slate-100 max-w-[42rem] relative border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] mb-3 sm:mb-10 last:mb-0 even:pl-8 hover:bg-gray-200 transition ">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem] ">
        <h3 className="text-2xl pb-1 font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-[0.9rem] text-slate-700 ">
          {description}
        </p>

        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto ">
          {tags.map((tags, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
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
        quality={100}
        className="absolute top-8 -right-[23.5rem] w-[56.25rem] rounded-t-md shadow-2xl group-even:right[initial] group-even:-left-[23.5rem]"
      />
    </section>
  );
}
