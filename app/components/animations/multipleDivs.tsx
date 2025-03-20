"use client"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap"
import { useRef } from "react";

export const MultipleDivs = () => {

  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)
  const parentRef = useRef<HTMLDivElement>(null)



  useGSAP(() => {

    const tl = gsap.timeline({
      yoyo: true,      // This makes the timeline play in reverse when it completes
      repeat: -1,      // Infinite repetition
    });

    tl.fromTo(parentRef.current, {
      y: 300
    }, {
      y: 50,
      duration: 1.2,
      ease: "power2.inOut",
    });


    tl.fromTo(
      [ref1.current, ref2.current, ref3.current],
      {
        opacity: 0,
        scale: 0.5,
        y: 20
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2, // This creates the staggered effect
        ease: "back.out(1.7)"
      },
      "-=1" // Start slightly before the parent animation finishes
    );


  }, { scope: parentRef })




  return (
    <div ref={parentRef} className="flex flex-row gap-3">
      <div className="h-[6rem] w-[7rem] bg-blue-300 flex flex-col items-center justify-center " ref={ref1}></div>
      <div className="h-[6rem] w-[7rem] bg-blue-300 flex flex-col items-center justify-center " ref={ref2}></div>
      <div className="h-[6rem] w-[7rem] bg-blue-300 flex flex-col items-center justify-center " ref={ref3}></div>
    </div>
  )
}
