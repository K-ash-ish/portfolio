"use client";
import { motion } from "../lib/framer";

import React from "react";
function Skills({ children }) {
  console.log("childrend:", children);
  return (
    <motion.div
      className="border-2 w-12 h-12"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    />
  );
}

export default Skills;
