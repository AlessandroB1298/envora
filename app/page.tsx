"use client"
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP); //register plugin to avoid react dependency issues 

export default function Home() {


  const containerRef = useRef<HTMLDivElement>(null)
  const bodyContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    const tl = gsap.timeline();

    tl.fromTo(containerRef.current, {
      y: 300
    }, {
      y: 50,
      duration: 1,
      ease: "power2.inOut" // Using a standard GSAP ease instead of easeIn

    },)



    tl.fromTo(bodyContainerRef.current, {
      opacity: 0, // Fixed the typo here
      y: 300
    }, {
      opacity: 1, // Fixed the typo here
      y: 125,
      duration: 1 // Added duration
    });


  }, [])




  return (
    <div className="min-h-screen flex flex-col ml-40  bg-gray-800  overflow-y-auto w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-gray-100 font-bold mb-2">Hello, Welcome to</h1>
          <h1 className="text-blue-500 text-4xl md:text-5xl font-extrabold">Envora</h1>
        </div>

        {/* Cards Grid */}
        <div ref={containerRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-600 hover:border-gray-500 hover:bg-gray-600 transition-all">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-100 mb-4">Copy & Paste Components</h2>
                <p className="text-gray-300">
                  Easy to use and resuable components, spanning buttons, animations, text, forms, navs and more!
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-600 hover:border-gray-500 hover:bg-gray-600 transition-all">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-100 mb-4">ShadeCn, GSAP, and FramerMotion</h2>
                <p className="text-gray-300">
                  The components here, are built on top of well-existing libraries, creating animations using industry
                  standard animation libraries, such as GSAP and FramerMotion.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-600 hover:border-gray-500  hover:bg-gray-600 transition-all">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-600 hover:border-gray-500 hover:bg-gray-600 transition-all">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-100 mb-4">Feature One</h2>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-600 hover:border-gray-500 hover:bg-gray-600 transition-all">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-100 mb-4">Feature Two</h2>
                <p className="text-gray-300">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-600 hover:border-gray-500  hover:bg-gray-600 transition-all">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-100 mb-4">Feature Three</h2>
                <p className="text-gray-300">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  )
}


