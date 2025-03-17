"use client"
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";


export const BasicAnimation = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.fromTo(containerRef.current, {
            y: 300
        }, {
            y: 50,
            duration: 2,
            repeat: -1,
            repeatDelay: 1,
            ease: "power2.inOut" // Using a standard GSAP ease instead of easeIn
        },)

    }, [])

    return (
        <div ref={containerRef}>
            <h2 className="text-white font-bold text-3xl">Some Animations</h2>

        </div>
    );
}
