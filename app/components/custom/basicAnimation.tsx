"use client"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";


interface AnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  customStyles: string;


}
export const BasicGsapAnimation: React.FC<AnimationProps> = ({ customStyles, children, ...props }) => {

  const ref = useRef<HTMLDivElement>(null)
  useGSAP(() => {

    const tl = gsap.timeline({
      yoyo: true,
      repeat: -1
    });


    tl.fromTo([ref.current?.childNodes], {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      ease: "back.out(1.7)",
      duration: 1,
      stagger: 0.4
    }, "-=1")
  })

  return (
    <div ref={ref} {...props} className={customStyles}>
      {children}
    </div>
  );
}
