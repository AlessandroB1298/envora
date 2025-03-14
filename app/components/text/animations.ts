export const basicDivAnimated =
  '"use client"' + '\n'
  + 'import gsap from "gsap";' + '\n'
  + 'import { useRef } from "react";' + '\n'
  + 'import { useGSAP } from "@gsap/react";' + '\n'
  + '' + '\n'
  + 'type BasicAnimationProps = {' + '\n'
  + '    boxes?: Array<number>' + '\n'
  + '}' + '\n'
  + 'export const BasicAnimation: React.FC<BasicAnimationProps> = ({ boxes }) => {' + '\n'
  + '    const containerRef = useRef<HTMLDivElement>(null);' + '\n'
  + '' + '\n'
  + '    useGSAP(() => {' + '\n'
  + '        const tl = gsap.timeline();' + '\n'
  + '        tl.fromTo(containerRef.current, {' + '\n'
  + '            y: 300' + '\n'
  + '        }, {' + '\n'
  + '            y: 50,' + '\n'
  + '            duration: 1,' + '\n'
  + '            ease: "power2.inOut" // Using a standard GSAP ease instead of easeIn' + '\n'
  + '        },)' + '\n'
  + '' + '\n'
  + '    }, [])' + '\n'
  + '' + '\n'
  + '    return (' + '\n'
  + '        <div ref={containerRef}>' + '\n'
  + '            {boxes ? (' + '\n'
  + '                <div className="grid grid-cols-3 gap-5 ">' + '\n'
  + '                    {boxes.map((_, index) => (' + '\n'
  + '                        <div key={index + 1} className=" flex flex-col items-center p-2  justify-center w-[9rem] h-[7rem] bg-gray-600 rounded-lg shadow-lg overflow-hidden border border-gray-600 hover:bg-gray-400 transition-all">' + '\n'
  + '                            <h2 className="font-bold text-white text-md">Some Text</h2>' + '\n'
  + '' + '\n'
  + '                        </div>' + '\n'
  + '                    ))}' + '\n'
  + '                </div>' + '\n'
  + '            ) : (' + '\n'
  + '                <h2 className="text-white font-bold text-3xl">Some Animations</h2>' + '\n'
  + '' + '\n'
  + '            )}' + '\n'
  + '        </div>' + '\n'
  + '    );' + '\n'
  + '}'

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
