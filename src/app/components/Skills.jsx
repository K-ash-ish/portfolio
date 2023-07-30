"use client";
import { motion } from "../lib/framer";

function Skills({ skill }) {
  return (
    <motion.div
      className="border-2 border-rose-500 rounded-lg mx-4 px-4 py-2 "
      initial={{ opacity: 0, translateX: 120 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{
        ease: "linear",
        duration: 1,
        x: { duration: 1 },
      }}
    >
      {skill}
    </motion.div>
  );
}

export default Skills;
