"use client";
import { motion } from "motion/react";

const BasicFramerMotion = () => {
  return (
    <div>
      <motion.h2
        initial={{ y: 300 }}
        transition={{ ease: "easeOut", duration: 2, repeat: Infinity, repeatDelay: 0.5, repeatType: "mirror" }}
        animate={{ y: 50, }}
        className="h-[6rem] w-[7rem] bg-blue-300 flex flex-col items-center justify-center "

      >

      </motion.h2>
    </div>
  );
};
export default BasicFramerMotion;
