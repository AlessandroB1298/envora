"use client"
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";


export const BasicAnimation = () => {

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            yoyo: true,
            repeat: -1
        });
        tl.fromTo(containerRef.current, {
            y: 300,
        }, {
            y: 50,
            duration: 2,
            repeatDelay: 1,
            ease: "power2.inOut", // Using a standard GSAP ease instead of easeIn
        },)

    }, [])

    return (
        <div ref={containerRef}>
            <div className="h-[6rem] w-[7rem] bg-blue-300 flex flex-col items-center justify-center ">
            </div>

        </div>
    );
}
