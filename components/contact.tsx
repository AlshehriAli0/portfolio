"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa6";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/send-email";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView({
    sectionName: "Contact",
    threshold: 0.5,
  });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="w-[min(95%,38rem)] mb-24 text-center scroll-mt-[7.5rem]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-slate-700 -mt-6">
        Contact me directly at{" "}
        <a className="underline" href="mailto:Ali0fawzish@outlook.com">
          {" "}
          Ali0fawzish@outlook.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col "
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (data) {
            toast.success("Message sent successfully");
            return;
          } else if (error) {
            toast.error(error);
            return;
          }
        }}
      >
        <input
          name="sender"
          className="h-14 rounded-lg px-4 border dark:bg-slate-900 border-black/10 focus:outline-none focus:ring-[1.7px] dark:focus:ring-white/20 focus:ring-black transition-all"
          placeholder="JohnDoe@example.com"
          type="email"
          required
          maxLength={100}
        />
        <textarea
          minLength={15}
          name="message"
          required
          placeholder="Your message"
          className="h-52 p-4 my-3 dark:bg-slate-900 focus:outline-none focus:ring-[1.7px] focus:ring-black rounded-lg border dark:focus:ring-white/20 border-black/10 transition-all"
        ></textarea>
        <button
        name="submit"
          rel="NavLinkContactSubmit"
          className="group flex items-center hover:bg-slate-950 dark:hover:bg-slate-700 hover:scale-105 justify-center gap-2 h-[3rem] w-[8rem] bg-slate-900 rounded-2xl text-white hover:font-bold outline-none transition-all active:scale-100"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane className="opacity-70 transition-all group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100 " />
        </button>
      </form>
    </motion.section>
  );
}
