"use client";
import { motion } from "motion/react";

const BasicFramerMotion = () => {
  return (
    <div>
      <motion.h2
        initial={{ y: 300 }}
        transition={{ ease: "easeOut", duration: 2, repeat: Infinity, repeatDelay: 1 }}
        animate={{ y: 50 }}
        className="text-white font-bold text-3xl"
      >
        Some Animation
      </motion.h2>
    </div>
  );
};
export default BasicFramerMotion;
