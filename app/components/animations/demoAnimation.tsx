"use client"
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";


type BasicAnimationProps = {
  boxes?: Array<number>
}
export const DemoAnimation: React.FC<BasicAnimationProps> = ({ boxes }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current, {
      y: 300
    }, {
      y: 50,
      duration: 1,
      ease: "power2.inOut" // Using a standard GSAP ease instead of easeIn
    },)

  }, [])

  return (
    <div ref={containerRef}>
      {boxes ? (
        <div className="grid grid-cols-3 gap-5 ">
          {boxes.map((_, index) => (
            <div key={index + 1} className=" flex flex-col items-center p-2  justify-center w-[9rem] h-[7rem] bg-gray-600 rounded-lg shadow-lg overflow-hidden border border-gray-600 hover:bg-gray-400 transition-all">
              <h2 className="font-bold text-white text-md">Some Text</h2>

            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-white font-bold text-3xl">Some Animations</h2>

      )}
    </div>
  );
}
