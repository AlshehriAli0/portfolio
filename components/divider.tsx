"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Divider() {
  return (
    <motion.div
      className="bg-slate-200 sm:my-24 my-16 h-16 w-1 rounded-full "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ delay: 0.17 }}
    ></motion.div>
  );
}
