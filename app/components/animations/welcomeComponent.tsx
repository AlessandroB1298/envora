import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap";
export const WelcomeComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      yoyo: true,
      repeat: -1
    });

    tl.fromTo(containerRef.current, {
      y: 300,
      opacity: 0
    }, {
      opacity: 1,
      y: 50,
      ease: "back.out(1.7)",
      duration: 1
    })

    tl.fromTo([firstRef.current, secondRef.current, thirdRef.current], {
      y: 20,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      ease: "back.out(1.7)",
      duration: 1.2,
      stagger: 0.2
    }, "-=1")


  })
  return (
    <div ref={containerRef} className="flex flex-row gap-2" >
      <h2 ref={firstRef} className="font-extrabold bg-gradient-to-br from-blue-800 to-white bg-clip-text text-transparent  text-4xl">Check</h2>
      <h2 ref={secondRef} className="font-extrabold bg-gradient-to-br from-blue-800 to-white bg-clip-text text-transparent  text-4xl">It</h2>
      <h2 ref={thirdRef} className="font-extrabold bg-gradient-to-br from-blue-800 to-white bg-clip-text text-transparent  text-4xl">Out!</h2>

    </div>
  )
}


