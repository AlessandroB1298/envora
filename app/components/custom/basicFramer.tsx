"use client";
import { motion } from "motion/react";


interface FramerBasic extends React.HTMLAttributes<HTMLDivElement> {
  customStyle: string
}

export const BasicFramerAnimation: React.FC<FramerBasic> = ({ customStyle, children, }) => {

  return (
    <motion.div
      initial={{ y: 275 }}
      transition={{ ease: "backOut", duration: 1, repeat: Infinity, repeatDelay: 0.2, repeatType: "mirror" }}
      animate={{ y: 50 }}
      className={customStyle}
    >
      {children}
    </motion.div>
  )
}
