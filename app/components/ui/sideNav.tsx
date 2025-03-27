"use client";
import Link from "next/link";

import {
  MousePointer,
  TextSelect,
  Play,
  Clipboard,
  Compass,
} from "lucide-react";
const SideNav = () => {

  return (
    <div className="h-[100vh] lg:w-[15.2vw] md:w-[16vw] md:pl-2  fixed  pl-5 overflow-auto z-10 bg-gradient-to-b from-[#131821] to-[#445673] border-r border-gray-600/30 shadow-[5px_0_15px_rgba(0,0,0,0.2)]">
      <div className="mt-4">
        <Link
          href={"/public"}
          className="text-3xl ml-2  w-full mt-[100px] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-700 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        >
          ENVORA
        </Link>
      </div>
      <div className="border-b border-dotted border-gray-500/50 w-[90%] my-2 md:p-3 sm-p-2"></div>
      <ul className="flex flex-col ml-2 gap-3 mt-3 text-white space-y-2 w-[90%] sm">
        <div className="flex flex-row hover:bg-gray-600/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-700/70 backdrop-blur-sm">
          <MousePointer className="text-blue-400" />
          <Link
            className="w-full"
            href={"/dashboard/buttons"}
          >
            Buttons
          </Link>
        </div>
        <div className="flex flex-row hover:bg-gray-600/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-700/70 backdrop-blur-sm">
          <Play className="text-green-400" />
          <Link
            className="w-full"
            href={"/dashboard/animations"}
          >
            Animations
          </Link>
        </div>
        <div className="flex flex-row hover:bg-gray-600/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-700/70 backdrop-blur-sm">
          <TextSelect className="text-purple-400" />
          <Link
            className="w-full"
            href={"/dashboard/text"}
          >
            Text & Layouts
          </Link>
        </div>
        <div className="flex flex-row hover:bg-gray-600/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-700/70 backdrop-blur-sm">
          <Clipboard className="text-amber-400" />
          <Link
            className="w-full"
            href={"/dashboard/forms"}
          >
            Forms
          </Link>
        </div>
        <div className="flex flex-row hover:bg-gray-600/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-700/70 backdrop-blur-sm">
          <Compass className="text-rose-400" />
          <Link
            className="w-full"
            href={"/dashboard/navs"}
          >
            Navs
          </Link>
        </div>
        {/* End of main navigation items */}
        <div className="border-b border-dotted border-gray-500/50 w-[90%] my-4"></div>

        {/* Documentation Section */}
        <div className="flex flex-row hover:bg-gray-600/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-700/70 backdrop-blur-sm">
          <TextSelect className="text-cyan-400" />
          <Link href={"/dashboard/docs"} className="w-full">
            Documentation
          </Link>
        </div>

        {/* About Section */}
        <div className="flex flex-row hover:bg-gray-600/80 hover:shadow-md hover:shadow-black/20 hover:translate-x-1 transition-all duration-200 text-md p-2 rounded-xl w-[12.7rem] gap-2 items-center border border-gray-600/30 bg-gray-700/70 backdrop-blur-sm">
          <Compass className="text-teal-400" />
          <Link href={"/dashboard/about"} className="w-full">
            About
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default SideNav;
