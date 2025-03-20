"use client"
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";


export const NewDemoAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);

  const fourthRef = useRef<HTMLDivElement>(null);

  const parentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(parentRef.current, {
      y: 300,
      opacity: 0
    }, {
      y: 50,
      opacity: 1,
      duration: 1.2,
      ease: "power2.inOut",
    })

    tl.fromTo([containerRef.current, secondRef.current, thirdRef.current, fourthRef.current], {
      y: 20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power1.inOut",
      scale: 1,
      stagger: 0.25

    }, "-=1.2")


  }, { scope: parentRef })

  return (
    <div ref={parentRef} >
      <div ref={containerRef} className="grid grid-cols-2 gap-8">


        <div className=" flex flex-col items-center p-2  justify-center max-w-6xl h-[7rem] bg-blue-600 hover:border-white hover:bg-blue-400 rounded-lg shadow-lg  hover:cursor-pointer duration-100 transition ease-in hover:translate-y-2  ">
          <h2 className="text-white font-bold text-2xl ">Feature 1</h2>
        </div>

        <div className=" flex flex-col items-center justify-center max-w-6xl h-[7rem]  bg-blue-600 hover:border-white hover:bg-blue-400  rounded-lg shadow-lg duration-100 transition ease-in hover:translate-y-2 hover:cursor-pointer ">
          <h2 className="text-white font-bold text-2xl ">Feature 2</h2>

        </div>


      </div>

      <div className="grid grid-cols-3 gap-8 mt-10" >
        <div ref={secondRef} className=" flex flex-col items-center p-2  justify-center max-w-4xl h-[7rem]  bg-blue-600 hover:border-white hover:bg-blue-400   rounded-lg shadow-lg duration-100 transition ease-in hover:translate-y-2 hover:cursor-pointer">
          <h2 className="text-white font-bold text-2xl ">Feature 3</h2>
        </div>

        <div ref={thirdRef} className=" flex flex-col items-center justify-center max-w-4xl h-[7rem]  bg-blue-600 hover:border-white hover:bg-blue-400  rounded-lg shadow-lg duration-100 transition ease-in hover:translate-y-2 hover:cursor-pointer">
          <h2 className="text-white font-bold text-2xl ">Feature 4</h2>
        </div>

        <div ref={fourthRef} className=" flex flex-col items-center justify-center max-w-4xl h-[7rem]  bg-blue-600 hover:border-white hover:bg-blue-400   shadow-lg rounded-lg duration-100 transition ease-in hover:translate-y-2 hover:cursor-pointer">
          <h2 className="text-white font-bold text-2xl ">Feature 5</h2>

        </div>
      </div>

    </div>
  )

}
