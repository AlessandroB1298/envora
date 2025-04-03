"use client";
import CopyContainer from "@/app/components/custom/copyButtonContainer";
import { CodePreview } from "@/app/components/ui/codePreview";
import { BasicAnimation } from "@/app/components/animations/basicAnimation";
import BasicFramerMotion from "@/app/components/animations/basicFramerMotion";
import {
  framerAnimation,
  basicDivAnimated,
  multipleDivText,
} from "@/app/components/text/animations";
import { MultipleDivs } from "@/app/components/animations/multipleDivs";

export default function Page() {
  return (
    <div className=" ml-[25vw] space-y-6   ">
      <section className=" flex flex-col">
        <div className="gap-2">
          <h2 className=" text-4xl mt-4 font-extrabold bg-gradient-to-br from-blue-700 to-white bg-clip-text text-transparent ">
            Animations
          </h2>
          <p className="w-1/2 mt-2 text-white opacity-20">
            This page is designed to showcase some basic animations and their
            properties, using tailwind for styling, however we must first look
            at how we comprise our button components
          </p>
        </div>
      </section>

      <section className="mt-5">
        <div className="gap-2">
          <p className="w-1/2 text-white opacity-20">
            Using gsap{"'s"} useGSap hook and framer motion we can add a simple
            animations
          </p>
        </div>
        <div className=" w-1/2">
          <CopyContainer copyText={"npm i @gsap/react gsap framer-motion"} />
        </div>
      </section>

      <section className="grid   mt-10 h grid-cols-1 sm:grid-cols-2 lg-grid-cols-4 gap-4">
        <div className="space-y-4">
          <h2 className="text-xl text-white font-bold">Basic gsap Animation</h2>
          <CodePreview
            className="bg-gray-900 overflow-y-auto  h-[48vh] "
            color="bg-gray-900"
            code={basicDivAnimated}
            fileName="GsapDiv.tsx"
          >
            <BasicAnimation />
          </CodePreview>
        </div>
      </section>

      <section className="grid  mt-10 h grid-cols-1 sm:grid-cols-2 lg-grid-cols-4 gap-4">
        <div className="space-y-4">
          <h2 className="text-xl text-white font-bold">
            Basic Framer Motion Animation
          </h2>
          <CodePreview
            className="bg-gray-900  h-[48vh] "
            color="bg-gray-900"
            code={framerAnimation}
            fileName="FramerMotionDiv.tsx"
          >
            <BasicFramerMotion />
          </CodePreview>
        </div>
      </section>

      <section className="grid  mt-10 h grid-cols-1 sm:grid-cols-2 lg-grid-cols-4 gap-4 mb-40">
        <div className="space-y-4">
          <h2 className="text-xl text-white font-bold">
            Multiple Div Animations
          </h2>
          <CodePreview
            className="bg-gray-900  h-[48vh] "
            code={multipleDivText}
            fileName="multpleDivAnimation.tsx"
            color="bg-gray-900"
          >
            <MultipleDivs />
          </CodePreview>
        </div>
      </section>
    </div>
  );
}
