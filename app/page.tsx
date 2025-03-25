"use client"
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { CodePreview } from '@/app/components/ui/codePreview';
import { welcome } from './components/text/welcome';
import { BasicGsapAnimation } from './components/custom/basicAnimation';
import { basicComponent, basicWelcomeCode } from './components/text/welcome';
import { BasicFramerAnimation } from './components/custom/basicFramer';
gsap.registerPlugin(useGSAP); //register plugin to avoid react dependency issues 

export default function Home() {


  const containerRef = useRef<HTMLDivElement>(null)
  const bodyContainerRef = useRef<HTMLDivElement>(null);
  const feature3Ref = useRef<HTMLDivElement>(null);
  const feature4Ref = useRef<HTMLDivElement>(null);




  useGSAP(() => {

    const tl = gsap.timeline();

    tl.fromTo(containerRef.current, {
      y: 300
    }, {
      y: 50,
      duration: 1.2,
      ease: "power2.inOut" // Using a standard GSAP ease instead of easeIn

    },)



    tl.fromTo([bodyContainerRef.current, feature3Ref.current, feature4Ref.current], {
      opacity: 0, // Fixed the typo here
      y: 20,
      scale: 0.5
    }, {
      opacity: 1, // Fixed the typo here
      scale: 1,
      y: 0,
      duration: 1, // Added duration
      stagger: 0.2,
      ease: "back.out(1.7)"
    }, "-=1");


  }, { scope: bodyContainerRef })

  return (
    <div className="min-h-screen flex flex-col ml-[20vw] md:w-[80vw] sm:w-[50vw] md:p-3 sm-p-2 ">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className=" grid grid-cols-2 text-left mt-3 ">
          <h1 className=" flex flex-col  text-gray-100 font-bold mb-2">
            <span className="text-4xl">
              Build Beautifully,

            </span>
            <span
              className=" text-4xl  font-extrabold bg-gradient-to-br from-blue-800 to-white bg-clip-text text-transparent"
            >
              Create with Envora
            </span>
            <span className="w-3/4">
              <p className="opacity-40 text-lg mt-3">
                Check out our app
                using cool libraries to build
                our own fun and easy-to-use
                component library.
              </p>


            </span>

          </h1>



          <CodePreview
            className=" w-[38.5vw] h-[26rem] bg-gray-900 overflow-y-auto "
            code={basicWelcomeCode}
            components={basicComponent}
            fileName="welcomeComponent.tsx"
            color='bg-gray-800'

          >
            <BasicGsapAnimation
              customStyles='flex flex-row gap-2'
            >
              <h2 className="bg-white bg-gradient-to-br from-blue-800 to-white bg-clip-text text-transparent text-4xl font-bold ">Welcome</h2>
              <h2 className="bg-white bg-gradient-to-br from-blue-800 to-white bg-clip-text text-transparent text-4xl font-bold ">to</h2>
              <h2 className="bg-white bg-gradient-to-br from-blue-800 to-white bg-clip-text text-transparent text-4xl font-bold ">the</h2>
              <h2 className="bg-white bg-gradient-to-br from-blue-800 to-white bg-clip-text text-transparent text-4xl font-bold ">Site</h2>
            </BasicGsapAnimation>
          </CodePreview>

        </div>

        <div ref={containerRef}>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-8  mx-auto">
            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-600 hover:border-gray-500 hover:bg-gray-600 hover:translate-y-1 transition-all">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-100 mb-4">Copy & Paste Components</h2>
                <p className="text-gray-300">
                  Easy to use and resuable components, spanning buttons, animations, text, forms, navs and more!
                </p>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-600 hover:border-gray-500 hover:translate-y-1 hover:bg-gray-600 transition-all">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-100 mb-4">ShadeCn, GSAP, and FramerMotion</h2>
                <p className="text-gray-300">
                  The components here, are built on top of well-existing libraries, creating animations using industry
                  standard animation libraries, such as GSAP and FramerMotion.
                </p>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-600 hover:border-gray-500  hover:translate-y-1 hover:bg-gray-600 transition-all">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-100 mb-4">Light Weight and Resuable</h2>
                <p className="text-gray-300">
                  This is the motto for this small ui library, making sure these components are not bloated,
                  ensuring a good UI and DX.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="container mx-auto px-4 py-16 md:py-24 mb-24">
        <div ref={bodyContainerRef}>

          <div ref={feature3Ref} className="grid grid-cols-2 gap-8  mx-auto">
            <div ref={feature4Ref}>
              <CodePreview

                className=" w-full h-[23rem] overflow-hidden bg-gray-900 "
                code={welcome}

                fileName="welcomeComponent.tsx"
                color='bg-gray-800'
              >
                <BasicFramerAnimation
                  customStyle='flex flex-row gap-2'
                >
                  <h2 className="bg-white bg-gradient-to-br from-blue-800 to-white bg-clip-text text-transparent text-4xl font-bold ">Welcome</h2>
                  <h2 className="bg-white bg-gradient-to-br from-blue-800 to-white bg-clip-text text-transparent text-4xl font-bold ">to</h2>
                  <h2 className="bg-white bg-gradient-to-br from-blue-800 to-white bg-clip-text text-transparent text-4xl font-bold ">the</h2>
                  <h2 className="bg-white bg-gradient-to-br from-blue-800 to-white bg-clip-text text-transparent text-4xl font-bold ">Site</h2>


                </BasicFramerAnimation>
              </CodePreview>

            </div>

            <div className="bg-gray-700 h-[10rem] rounded-lg shadow-lg overflow-hidden border border-gray-600 hover:translate-y-1 hover:border-gray-500 hover:bg-gray-600 transition-all">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-100 mb-4">Custom First.</h2>
                <p className="text-gray-300">
                  This an example component that can be customized and easily modified,
                  check <a href="/dashboard/docs" className="text-blue-300 cursor-pointer">this link</a> to learn more about how we make our components.
                </p>

              </div>


            </div>

          </div>
        </div>
      </section>
    </div>
  )
}


