import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap";
export const WelcomeComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
      duration: 2.5
    })

  })
  return (
    <div ref={containerRef} className="flex flex-row gap-54" >
      <h2 className="text-white text-4xl font-bold">Check it!</h2>

    </div>
  )
}


