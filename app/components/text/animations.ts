export const basicDivAnimated =
  "'use client'" +
  "\n" +
  "import gsap from 'gsap';\n" +
  "import { useRef } from 'react';\n" +
  "import { useGSAP } from '@gsap/react';" +
  "\n" +
  "\n" +
  "const BasicAnimation=()=>{" +
  "\n" +
  "\n" +
  "const containerRef = useRef<HTMLDivElement>(null);" +
  "\n" +
  "\n" +
  " useGSAP(() => { " +
  "\n" +
  "  const tl = gsap.timeline();" +
  "\n" +
  "   tl.fromTo(containerRef.current, {" +
  "\n" +
  "     y: 300 " +
  "\n" +
  "     }, {" +
  "\n" +
  "    y: 50," +
  "\n" +
  "    duration: 1," +
  "\n" +
  "    ease: 'power2.inOut'" +
  "\n" +
  "  },)" +
  "\n" +
  "\n" +
  "},[])" +
  "\n" +
  "return(" +
  "\n" +
  "<div ref={containerRef}>" +
  "\n" +
  "<h2 className='text-white font-bold text-3xl'>Some Animations</h2>" +
  "\n" +
  "</div>" +
  "\n" +
  " );" +
  "\n" +
  "}";

export const framerAnimation =
  "'use client;'" +
  "\n" +
  "import { motion } from 'motion/react';" +
  "\n" +
  "\n" +
  "const BasicFramerMotion = () => {" +
  "\n" +
  "return (" +
  "\n" +
  "  <div>" +
  "\n" +
  "   <motion.h2" +
  "\n" +
  "    initial={{ y: 300 }}" +
  "\n" +
  "    transition={{ ease: 'easeOut', duration: 1 }}" +
  "\n" +
  "    animate={{ y: 50 }}" +
  "\n" +
  "    className='text-white font-bold text-3xl'" +
  "\n" +
  " >" +
  "\n" +
  "  Some Animation" +
  "\n" +
  "</motion.h2>" +
  "\n" +
  "</div>" +
  "\n" +
  ");" +
  "\n" +
  "}";
